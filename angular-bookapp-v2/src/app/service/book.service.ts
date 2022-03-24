import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  public bookList : any = [
    {bookTitle:'Offensive Security', bookAuthor:'Raphael Johnson', bookPrice:1500, bookCategory:'Computers'},
    {bookTitle:'Nature\'s Love and Hate', bookAuthor:'Isabella Scheidner', bookPrice:2000, bookCategory:'Science'},
    {bookTitle:'The taste of India', bookAuthor:'Ranga Shinay', bookPrice:1000, bookCategory:'Cooking'},
    {bookTitle:'The Genius', bookAuthor:'Ramanujam', bookPrice:2500, bookCategory:'Math'},
    {bookTitle:'SpaceX, The Journey', bookAuthor:'Elon Musk', bookPrice:3000, bookCategory:'Business'},
  ];

  constructor() { }

  getBookList(){
    return this.bookList;
  }

  addBookToList(newBook : any){
    this.bookList.push(newBook);
  }
}
