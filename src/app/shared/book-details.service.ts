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
  list:BookDetails[];


  postBookDetail(){
    return this.http.post(this.baseURL, this.formData);
  }
  putBookDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.bookId}`, this.formData);
  }

  deleteBookDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as BookDetails[]);
  }
  
}
