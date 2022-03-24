import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  CourseList: any = [
    {
      courseId: 101,
      courseName: 'Offensive Security Certified Professional',
      courseFee: '0.9 lakh',
      rating: 5,
      courseImgUrl:"assets\\icons\\oscp-icon.png",
    },
    {
      courseId: 102,
      courseName: 'AWS Developer Associate',
      courseFee: '0.2 lakh',
      rating: 4.5,
      courseImgUrl:"assets\\icons\\aws-devassos-icon.png",
    },
    {
      courseId: 103,
      courseName: 'AWS Solutions Architect',
      courseFee: '0.2 lakh',
      rating: 5,
      courseImgUrl:"assets\\icons\\aws-solarch-icon.png",
    },
    {
      courseId: 104,
      courseName: 'Azure Developer Associate',
      courseFee: '0.4 lakh',
      rating: 4,
      courseImgUrl:"assets\\icons\\azure.png",
    },
    {
      courseId: 105,
      courseName: 'EC Council CEH',
      courseFee: '0.2 lakh',
      rating: 4,
      courseImgUrl:"assets\\icons\\ceh-icon.png",
    },
  ];

  constructor() {}

  getCourseList() {
    return this.CourseList;
  }

  getCourseDetails(courseId: any) {
    for (var course of this.CourseList) {
      if (courseId == course.courseId) {
        return course;
      }
    }
  }
}
