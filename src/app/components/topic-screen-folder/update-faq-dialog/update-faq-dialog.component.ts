import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-update-faq-dialog',
  templateUrl: './update-faq-dialog.component.html',
  styleUrls: ['./update-faq-dialog.component.scss']
})
export class UpdateFaqDialogComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string;

  faq: FormGroup;
  faqObject: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateFaqDialogComponent>) { }

  ngOnInit(): void {

    this.faqObject = {
      question : this.question,
      answer : this.answer,
    }

    this.faq = new FormGroup({
      question: new FormControl(''),
      answer: new FormControl(''),
    })
    console.log("OLD INFO", this.faqObject);
  };

  onSubmit(): void {

  }

  cancel() {
    this.dialogRef.close();
    console.log("Question:",this.question);
    console.log("Answer:",this.answer);
  }

}


