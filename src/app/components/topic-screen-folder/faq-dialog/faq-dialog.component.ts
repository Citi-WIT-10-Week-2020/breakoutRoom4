import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'
import { FileService } from 'src/app/shared/file.service';
import { TopicComponent } from '../../topic/topic.component';

@Component({
  selector: 'app-faq-dialog',
  templateUrl: './faq-dialog.component.html',
  styleUrls: ['./faq-dialog.component.scss'],
  providers:[FileService]
})
export class FaqDialogComponent implements OnInit {

  faqObject: any;
  faq: FormGroup;
  @Input() faqObject: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FaqDialogComponent>, private fileservice:FileService) { }

  ngOnInit() {
    console.log("INSIDE DIALOG",this.faqObject);
    this.faq = new FormGroup({
      question: new FormControl(''),
      answer: new FormControl('')
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
    //create a file....
    this.fileservice.createFile(
      "", 
      "Question/Answer",
      null,
      this.faqObject.course,
      this.faqObject.topic,
      this.faq.get('answer').value,
      "FAQ",
      this.faq.get('question').value
    )
}
}
