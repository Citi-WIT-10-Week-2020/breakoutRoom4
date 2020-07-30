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
  @Input() id: string;
  @Input() course: string;
  @Input() topic: string;


  faq: FormGroup;
  faqObject: IFile;

  ngOnInit(): void {

    this.faqObject = {
      filename: this.question,
      fileDescription: this.answer,
      filetype: "Question/Answer",
      resourseGroup: "FAQ",
      id: this.id,
      file: null,
      course: this.course,
      topic: this.topic,
    }

    this.faq = new FormGroup({
      filename: new FormControl(''),
      fileDescription: new FormControl(''),
    })
    console.log("OLD INFO", this.faqObject);
  };

  onSubmit(): void {
    console.log(this.faq.value);
    console.log("submit works");

    if(this.faq.get('filename').value != ''){
      this.faqObject.filename = this.faq.get('filename').value;
      this.question = this.faq.get('filename').value;
      console.log("new question");
    }
    else {this.faqObject.filename = this.question;}

    if(this.faq.get('fileDescription').value != ''){
      this.faqObject.fileDescription = this.faq.get('fileDescription').value;
      this.answer = this.faq.get('fileDescription').value;
      console.log("new answer");
    }
    else {this.faqObject.fileDescription = this.answer;}
    
    console.log("NEW INFO", this.faqObject);


    this.updateFile();
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
    console.log("Question:",this.question);
    console.log("Answer:",this.answer);
  }

  async updateFile(){
    //just need an updateFile method in fileservice/api!
    //this.fileservice.updateFile(this.faqObject);
}

}


