import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';

const routes: Routes = [
  {
    path:'form',
    component: FormComponent,
    pathMatch:'full',
  },
 
  {
    
    path:'weather',
    component: WeatherComponent,
    
    pathMatch:'full',
  

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
