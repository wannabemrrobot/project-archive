import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: [
    '@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"',
  ],
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  
  bookFormData = new FormGroup({
    bookTitle: new FormControl('', [Validators.required]),
    bookAuthor: new FormControl('', Validators.required),
    bookPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    bookCategory: new FormControl('Science',[Validators.required]),
  });

  public bookAddStatus : boolean = false;
  public bookAddWarning : boolean = false;

  constructor(private bookService : BookService) {}

  validate(){
    console.log(this.bookFormData.value.bookTitle);
    this.bookService.addBookToList(this.bookFormData.value);
    console.log("book added to the service.");
    this.bookAddStatus = true;
  }
}
