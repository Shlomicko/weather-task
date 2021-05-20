import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherPageComponent} from './pages/weather-page/weather-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather'
  },
  {
    path: 'weather',
    component: WeatherPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
