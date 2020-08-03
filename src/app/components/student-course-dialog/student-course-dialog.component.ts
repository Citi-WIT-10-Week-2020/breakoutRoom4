import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-course-dialog',
  templateUrl: './student-course-dialog.component.html',
  styleUrls: ['./student-course-dialog.component.scss']
})
export class StudentCourseDialogComponent implements OnInit {
  courseSearch: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<StudentCourseDialogComponent>) {}

  ngOnInit(): void {
    this.courseSearch = new FormGroup({
      courseId: new FormControl('')})
  };
  cancel(): void{
    this.dialogRef.close();

  }
  onSubmit(): void {
    console.log(this.courseSearch.get('courseId').value);
    console.log("submit works");
    // this.courseObject = this.course.value;
    // console.log("CourseObject",this.courseObject);
    
    this.dialogRef.close();
    
  }
}
