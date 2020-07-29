import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FileService } from 'src/app/shared/file.service';
import { IFile } from 'src/app/shared/file';

@Component({
  selector: 'app-update-faq-dialog',
  templateUrl: './update-faq-dialog.component.html',
  styleUrls: ['./update-faq-dialog.component.scss'],
  providers:[FileService]
})
export class UpdateFaqDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateFaqDialogComponent>, private fileservice:FileService) { }

  @Input() question: string;
  @Input() answer: string;


  faq: FormGroup;
  faqObject: IFile;

  ngOnInit(): void {

    /*this.faqObject = {
      filename : this.question,
      fileDescription : this.answer,
      filetype: "Question/Answer",
      id: null,
    }*/

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
 //   console.log("Question:",this.question);
  //  console.log("Answer:",this.answer);
  }

}


