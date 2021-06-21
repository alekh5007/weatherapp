import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from './components/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import {MatCardModule} from '@angular/material/card';
 import { FormsModule } from '@angular/forms';
// import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
 import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WeatherComponent,
    WeatherreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     FormsModule,
    // MatListModule,
     MatIconModule,
     MatSelectModule,
     HttpClientModule,
     MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
