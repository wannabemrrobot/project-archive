import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styles: ['@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'],
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent{

  public course : any ;
  private courseId : any ;
  public courseImgUrl : any ;

  constructor(private actRoute : ActivatedRoute, private courseService : CourseService) {
    this.actRoute.params.subscribe((params) => {
      this.courseId = params['courseId'];
      this.course = this.courseService.getCourseDetails(this.courseId);
      // this.courseImgUrl = (url : any) => {
      //   if(this.course.courseId==101){
      //     url = 
      //   }
      // }
    })
  }

}
