import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-student-course-dialog',
  templateUrl: './student-course-dialog.component.html',
  styleUrls: ['./student-course-dialog.component.scss']
})
export class StudentCourseDialogComponent implements OnInit {
  courseSearch: FormGroup;
  @Input() studentId : string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<StudentCourseDialogComponent>,private apiservice:APIService) {}
  courseId : string;
  ngOnInit(): void {
    this.courseSearch = new FormGroup({
      courseId: new FormControl('')})
  };
  cancel(): void{
    this.dialogRef.close();

  }
  onSubmit(): void {
    console.log(this.courseSearch.get('courseId').value);
    this.courseId = this.courseSearch.get('courseId').value;
    console.log("submit works");
    // this.courseObject = this.course.value;
    // console.log("CourseObject",this.courseObject);
    //create studentCOurse
    this.apiservice.CreateStudentCourse({
      id:uuidv4(),
      studentID:this.studentId,
      courseID: this.courseId
    }).catch((err)=>{
      console.log("Couldn't create studentCourse",err);
    })
    this.dialogRef.close();
    
  }
}
