import {Component, Inject} from '@angular/core';
import {OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../../shared/courses.service';
import { ICourse } from '../../shared/course';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss'],
  providers:[CourseService]
})

export class DialogBodyComponent implements OnInit{
  course : FormGroup;
  courseObject: ICourse;

  ngOnInit() {
    this.course = new FormGroup({
      courseName: new FormControl(''),
      professor: new FormControl('Yong Yoon'),
      courseDescription: new FormControl(''),
      id: new FormControl(uuidv4())
    })
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogBodyComponent>, private courseservice:CourseService) {}
  
  
  // close() {   
  //   this.dialogRef.close();
  //   this.onSubmit();
  //   this.createCourse();
  // }
  cancel(): void{
    this.dialogRef.close();

  }
  onSubmit(): void {
    console.log(this.course.value);
    console.log("submit works");

    // this.courseObject.courseName = this.course.get('course_name').value;
    // this.courseObject.courseDescription = this.course.get('courseDesc').value;
    // this.courseObject.id = this.course.get('identification').value;


    // console.log("Course name is: " + this.courseObject.courseName);
    // console.log("Course description is: " + this.courseObject.courseDescription);
    //console.log("Course ID is: " + this.courseObject.id);

    this.courseObject = this.course.value;
    console.log("CourseObject",this.courseObject);
    
    this.dialogRef.close();
    this.createCourse();
  }
  async createCourse(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' , err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.createCourse(this.courseObject).subscribe(myObserver);
  }
  get courseName(): any {
    return this.course.get('course_name').value;
    
  }
}
