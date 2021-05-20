import {ChangeDetectionStrategy, Component, Input, OnInit, Type} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Units} from '../../data/units.enum';
import {EnumReflection} from '../../data/enum-reflection';
import {Store} from '@ngrx/store';
import {AppState, selectCityWeather} from '../../app.state';
import {getCityWeatherAction} from '../../store/cities.actions';
import {CityWeatherResponse} from '../../models/city-weather-response';
import {map, skip} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DbService} from '../../data/db.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherFormComponent implements OnInit {

  public cityWeatherForm!: FormGroup;
  public filteredOptions$!: Observable<string[]>;

  readonly tempUnits: string[] = EnumReflection.getNames(Units);
  public weatherData: CityWeatherResponse | null = null;

  constructor(private formBuilder: FormBuilder,
              private DB: DbService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(selectCityWeather).pipe(skip(1)).subscribe(
      res => {
        this.weatherData = res.data;
      }
    );
    this.cityWeatherForm = this.formBuilder.group({
      city: ['', Validators.required],
      units: ['', Validators.required]
    });

    // @ts-ignore
    this.filteredOptions$ = this.cityWeatherForm.get('city')?.valueChanges.pipe(
      map(value => {
        console.log(value);
        return this.DB.filterCityByName(value);
      })
    );
  }

  public addCity(): void {
    if (this.cityWeatherForm?.valid) {
      const city: string = this.cityWeatherForm.get('city')?.value;
      const unitsString: string = this.cityWeatherForm.get('units')?.value;
      const units: Units = (Units as any)[unitsString];

      this.store.dispatch(getCityWeatherAction({name: city, units}));
    }
  }
}
