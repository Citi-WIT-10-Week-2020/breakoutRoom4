import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-faq-dialog',
  templateUrl: './faq-dialog.component.html',
  styleUrls: ['./faq-dialog.component.scss']
})
export class FaqDialogComponent implements OnInit {

  faqObject: any;
  faq: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FaqDialogComponent>) { }

  ngOnInit() {
    this.faq = new FormGroup({
      question: new FormControl(''),
      answer: new FormControl(''),
      id: new FormControl(uuidv4())
    })
  };

  cancel(): void{
    this.dialogRef.close();

  }
  onSubmit(): void {
    console.log(this.faq.value);
    console.log("submit works");

   // this.faqObject = this.faq.value;
   // console.log("CourseObject",this.faqObject);
    
    this.dialogRef.close();
    //create the course
    this.createFaq();
  }

  //logic for creating the course
  async createFaq(){
    
}
}
