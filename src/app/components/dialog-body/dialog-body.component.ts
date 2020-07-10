import {Component, Inject} from '@angular/core';
import {OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
//import { ICourse } from 'src/app/components/home-screen/course';
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})

export class DialogBodyComponent implements OnInit{
  course : FormGroup;
  ngOnInit() {
    this.course = new FormGroup({
      courseName: new FormControl(''),
      professor: new FormControl(''),
      courseDescription: new FormControl(''),
      id: new FormControl('')
    })
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogBodyComponent>) {}
    // courseName = new FormControl('');  
    // courseDesc = new FormControl('');
    // courseCode = new FormControl('');
    // accessCode = new FormControl('');
    // topicNum = new FormControl('');
  
  close() {   
    this.dialogRef.close();
  }
  onSubmit() {
    console.log(this.course.value, this.course.valid);
  }

}

// export interface NewCourse {
//   courseName: string;
//   courseDesc: string;
//   courseCode: string;
//   accessCode: number;
//   topicNum: number;
// }
