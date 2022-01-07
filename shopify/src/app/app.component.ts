import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showSplash = true;
  copy = false;
  constructor(public hero:HeroService ){
    this.hero.getData()
  
    
    setTimeout(() => {
      // After the transition is ended the showSplash will be hided
      this.showSplash = !this.showSplash;
   }, 700);
    
  }
  share(){
    console.log(this.copy);
    
    this.copy = true;
    setTimeout(()=>{
      this.copy = false
    },700)
  }
  title = 'shopify';
  flag = false;
  textflag = false;

  
}
