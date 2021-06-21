import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
 //create method
 public addcity(user:any){
  // console.log("inside service===>>>", user)
   let param1 = user;
   return this.http.post(`https://api.openweathermap.org/data/2.5/weather?q=${param1}&appid=936ac9dfb3fc5ac43059dc2148d0eccf`,'');
 }

 public addlocal(value:any){
 //  console.log("value inside service====>>>>>",value)
   localStorage.setItem('value',JSON.stringify(value));
   return true;
 }

 public getweatherdata(){
   //console.log("calling getweather data")
   return JSON.parse(localStorage.getItem('value'));
 }

}
