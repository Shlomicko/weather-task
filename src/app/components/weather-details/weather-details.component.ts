import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../shared/config/constants.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  private iconUrl = '';

  @Input() cityName = '';
  @Input() temperatures = 0;
  @Input() set icon(code: string){
    this.iconUrl = this.constants.ICON_URL(code);
  }

  get icon(): string{
    return this.iconUrl;
  }

  constructor(private constants: Constants) { }

  ngOnInit(): void {
  }

}
