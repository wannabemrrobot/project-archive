import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styles: ['@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'],
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit{

  @Input('newBookChild') newBook : any ;

  constructor() {
    console.log("Value in child " + this.newBook);
  }
  
  ngOnInit(): void{
    
  }
} 

