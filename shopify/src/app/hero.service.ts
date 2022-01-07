import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  img:any = []
  textFlag = [false,false,false,false,false]
  likeFlag = [false,false,false,false,false]
  shareFlag = [false,false,false,false,false]
  i  =5
  constructor(public http:HttpClient) {
   }
   getData(){
     console.log(this.img!=undefined);
     
      return this.http.get('https://api.nasa.gov/planetary/apod?api_key=Dg8kxZre4788Ey7R2XGMsUdOFgjaavcbTCEHKP3Q').subscribe((data:any)=>{
        console.log(data); 
      
      while(this.i>0){
        data.textFlag = false
        data.likeFlag = false
        this.img.push(data)
        this.i-=1
      }
      console.log(this.img);
      
       
       
      })

   }
}
