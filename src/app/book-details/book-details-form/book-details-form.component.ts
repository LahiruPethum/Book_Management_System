import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from 'src/app/shared/book-details.model';
import { BookDetailsService } from 'src/app/shared/book-details.service';

@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styles: []
})
export class BookDetailsFormComponent implements OnInit {

  constructor(public service: BookDetailsService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.bookId==0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm){
    this.service.postBookDetail().subscribe(
      res=>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Submited Successfully', 'Book detail Added');
      },
      err=>{
        console.log(err);
      }
    );
  }

  updateRecord(form:NgForm){
    this.service.putBookDetail().subscribe(
      res=>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Updated Successfully', 'Book detail Added');
      },
      err=>{
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData=new BookDetails();
  }

}
