import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, selectCityWeather} from '../../app.state';
import {CityWeatherResponse} from '../../models/city-weather-response';
import {WeatherFormComponent} from '../../components/weather-form/weather-form.component';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit, AfterViewInit {

  public locations: CityWeatherResponse[] = [];
  @ViewChild('formContainer', { read: ViewContainerRef }) formContainer!: ViewContainerRef;

  constructor(private store: Store<AppState>, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.store.select(selectCityWeather).subscribe(
      res => {
        if (res.data) {
          // @ts-ignore
          this.locations = this.locations.concat(res.data);
          this.addForm();
        }
      }
    );
  }


  ngAfterViewInit(): void {
    this.addForm();
  }


  private addForm(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WeatherFormComponent);
    this.formContainer.createComponent<WeatherFormComponent>(componentFactory);
  }
}
