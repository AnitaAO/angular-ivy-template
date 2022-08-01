import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: '<h2>{{ title }}</h2>',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'Building castle in the air'

  constructor() { }

  ngOnInit() {
  }

}