import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from '../shared/book-details.model';
import { BookDetailsService } from '../shared/book-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: BookDetailsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: BookDetails){
      this.service.formData = Object.assign({},selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this one?')){
      this.service.deleteBookDetail(id).subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "Book Detail Register");
        },
        err=>{console.log(err)}
      );
    }
   
  }
}
