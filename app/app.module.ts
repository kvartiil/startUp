import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopComponent } from './develop/develop.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'develop', component: DevelopComponent}
  ])
   ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, DevelopComponent ],
  bootstrap:    [ AppComponent, DevelopComponent ]
})
export class AppModule { }
