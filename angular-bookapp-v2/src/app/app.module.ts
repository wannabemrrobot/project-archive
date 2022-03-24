import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookService } from './service/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AddBookComponent,
    BookListComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:IntroductionComponent},
      {path:'AddBook', component:AddBookComponent},
      {path:'BookList', component:BookListComponent},
      {path:'**', component:Error404Component}
    ]),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
