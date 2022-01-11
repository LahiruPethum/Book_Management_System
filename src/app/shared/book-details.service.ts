import { Injectable } from '@angular/core';
import { BookDetails } from './book-details.model';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private http:HttpClient) { }

  readonly baseURL = "http://localhost:52087/api/BookDetail";
  formData: BookDetails = new BookDetails();
}
