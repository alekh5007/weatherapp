import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  report=null;
  constructor(private userservicee:UserserviceService) { }

  ngOnInit(): void {
    let vall=this.userservicee.getweatherdata();
    console.log("weathercomp",vall)
    this.setwet(vall);
  }

  setwet(vall){
    this.report=vall;
    let sunsettime=new Date(this.report.sys.sunset*1000);
    this.report.sunset_time=sunsettime.toLocaleTimeString();
    let currentDate=new Date();
    this.report.isDay=(currentDate.getTime() < sunsettime.getTime());
    this.report.temp_celcius=(this.report.main.temp - 273.15).toFixed(0);
    this.report.temp_min=(this.report.main.temp_min - 273.15).toFixed(0);
    this.report.temp_max=(this.report.main.temp_max - 273.15).toFixed(0);
    this.report.temp_feels_like=(this.report.main.feels_like - 273.15).toFixed(0);
    this.report.env=this.report.weather[0].description;

    this.report.city=this.report.name;
  }

}
