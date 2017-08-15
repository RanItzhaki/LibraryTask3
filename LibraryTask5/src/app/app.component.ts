import { Component, ViewChild} from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {isUndefined} from "util";

/**
 * A class of the main component in the web app.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('popup1') popup1: Popup;
  books: Array<BooksItems>;
  placeHolderBook: BooksItems;
  mainTitle = 'Welocme To The Library!';
  subTitle = 'List Of Books';

  constructor() {
    this.books = new Array<BooksItems>();
    this.books.push(new BooksItems("IT", "Stephen King", "1986"));
    this.books.push(new BooksItems("A Game Of Thrones", "George R. R. Martin", "1991"));

  }

  /**
   * The mothod removes a book from the books list.
   * @param item
   */
  removeBook(item: BooksItems)
  {
    this.books.splice(this.books.indexOf(item),1);
  }

  /**
   * The mothod inserts a new book from to the books list.
   * @param title
   * @param author
   * @param date
   */
  addBook(title,author,date)
  {
    if ((title.value.length > 0) && (author.value.length > 0) && (date.value.length > 0))
    {
      this.books.push(new BooksItems(title.value, author.value, date.value));
    }
    else
    {
      alert("Incomplete input!\nEnter a valid input...");
    }
  }

  /**
   * The method opens the edit window.
   * @param item
   */
  openPopUp(item: BooksItems)
  {
    this.placeHolderBook = item;
  }

  /**
   * The mothod updates a book from the books list.
   * @param title
   * @param author
   * @param date
   */
  editBook(title, author, date)
  {
    this.removeBook(this.placeHolderBook);
    this.addBook(title, author, date);
    this.popup1.hide();
  }

  /**
   * The merhod checks if a book is alrady exists in the books list.
   * @param title
   * @param author
   * @param date
   * @returns {boolean}
   */
  containsbook(title,author,date) : boolean
  {
    var validBook = new BooksItems(title, author, date);
    for (let book in this.books) {
      if (this.books.some(book => book == validBook)) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

/**
 * A class of a book in the library.
 */
export class BooksItems
{
  constructor(public title: string, public author: string, public date: string)
  {
  }
}
