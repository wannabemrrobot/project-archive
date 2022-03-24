import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: ['@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'],
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  public courses : any ;

  constructor(private courseService : CourseService) {
    this.courses = this.courseService.getCourseList();
  }


}
