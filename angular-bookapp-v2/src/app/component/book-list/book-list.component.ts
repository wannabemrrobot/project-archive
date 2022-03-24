import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [
    '@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"',
  ],
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent{

  public BookList : any ;

  constructor(private bookService : BookService) {
    this.BookList = this.bookService.getBookList();
  }

  
}
