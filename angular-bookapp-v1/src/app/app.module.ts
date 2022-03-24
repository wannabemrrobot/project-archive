import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { ShowBookComponent } from './component/show-book/show-book.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { CourseService } from './service/course.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddBookComponent,
    ShowBookComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:WelcomeComponent},
      {
        path:'AddBook', 
        component:AddBookComponent,
        // children: ([
        //   {path:'ShowBook', component:ShowBookComponent}
        // ])
      },
      {
        path:'Courses', 
        component:CoursesComponent,
        children:([
          {path:':courseId', component:CourseDetailsComponent}
        ]),
      },
    ]),
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
