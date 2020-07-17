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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogBodyComponent>, private courseservice:CourseService) {}

  ngOnInit() {
    //create form group..will eventually have to pass in param for professor
    this.course = new FormGroup({
      courseName: new FormControl(''),
      professor: new FormControl('Yong Yoon'),
      courseDescription: new FormControl(''),
      id: new FormControl(uuidv4())
    })
  };

  
  cancel(): void{
    this.dialogRef.close();

  }
  onSubmit(): void {
    console.log(this.course.value);
    console.log("submit works");

    // this.courseObject.courseName = this.course.get('course_name').value;
    // this.courseObject.courseDescription = this.course.get('courseDesc').value;
    // this.courseObject.id = this.course.get('identification').value;

    this.courseObject = this.course.value;
    console.log("CourseObject",this.courseObject);
    
    this.dialogRef.close();
    //create the course
    this.createCourse();
  }

  //logic for creating the course
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
}
