import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  bookCollection:Book[];
  constructor(private booksService: BooksService) { 
    this.bookCollection = this.booksService.getBookCollection();
  }

  ngOnInit(): void {
  }

}
