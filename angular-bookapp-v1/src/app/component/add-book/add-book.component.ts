import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: ['@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'],
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{

  public newBookParent : any ;
  public flag : boolean = false;
 
  constructor(private route:Router) {}

  bookDetailsData : any = new FormGroup({
    BookId : new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    BookName : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    BookAuthor : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
  })

  validate(){
    console.log("Form submitted : " + this.bookDetailsData.value);
    this.newBookParent = this.bookDetailsData.value;
    // this.route.navigate(['/AddBook/', 'ShowBook']);
    this.flag = true;

  }

}
