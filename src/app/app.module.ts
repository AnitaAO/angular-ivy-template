import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    CoursesComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
