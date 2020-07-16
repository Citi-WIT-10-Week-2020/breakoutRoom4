import { Component, Inject } from '@angular/core';
import { Input } from '@angular/core'
import {OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../../shared/courses.service';
import { ICourse } from '../../shared/course';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
  providers:[CourseService]
})
export class UpdateDialogComponent implements OnInit {
  
  @Input() name : string;
  @Input() description : string;
  @Input() professor : string;
  @Input() id : string;

  course : FormGroup;
  //courseObject : ICourse;
  courseObject : ICourse = {
    courseName : this.name,
    courseDescription : this.description,
    professor : this.professor,
    id : this.id
  };

  ngOnInit() {
    this.course = new FormGroup({
      courseName: new FormControl(''),
      courseDescription: new FormControl(''),
    })
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateDialogComponent>, private courseservice:CourseService) {}
  
  onSubmit(): void {
    console.log(this.course.value);
    console.log("submit works");

    this.courseObject.courseName = this.name;
    this.courseObject.courseDescription = this.description;
    this.courseObject.professor = this.professor;
    this.courseObject.id = this.id;

    if(this.course.get('courseName').value != ''){
      this.courseObject.courseName = this.course.get('courseName').value;
      this.name = this.course.get('courseName').value;
      console.log("new course name");
    }
    else{this.courseObject.courseName = this.name;}

    if(this.course.get('courseDescription').value != ''){
      this.courseObject.courseDescription = this.course.get('courseDescription').value;
      this.description = this.course.get('courseDescription').value;
      console.log("new course description");
    }
    else {this.courseObject.courseDescription = this.description;}
    // this.name = this.course.get('courseName').value;
    // this.description = this.course.get('courseDescription').value;
    //this.courseObject = this.course.value;
    console.log("@Input Course Name:",this.name);
    console.log("CourseObject Name:",this.courseObject.courseName);
    console.log("@Input Course Description:",this.description);
    console.log("CourseObject Description:",this.courseObject.courseDescription);

    this.updateCourse();
    this.dialogRef.close();

  }

  cancel(): void{
    this.dialogRef.close();
    console.log("Course Name:",this.name);
    console.log("Course Description:",this.description);
  }

  async updateCourse(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.updateCourse(this.courseObject).subscribe(myObserver);

}
}
