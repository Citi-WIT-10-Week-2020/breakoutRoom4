import {Component, Inject} from '@angular/core';
import {OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../../shared/courses.service';
import { ICourse } from '../../shared/course';

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
      course_name: new FormControl(''),
      prof: new FormControl('Yong Yoon'),
      courseDesc: new FormControl(''),
      identification: new FormControl('')
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

    //this.courseObject.courseName = this.course.get("course_name");
    this.courseObject.courseDescription = this.course.value.courseDesc;
    this.courseObject.professor = this.course.value.prof;
    this.courseObject.id = this.course.value.identification;
    // console.log(this.courseObject.courseName);
    this.dialogRef.close();
    //this.createCourse();
  }
  async createCourse(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.createCourse(this.courseObject).subscribe(myObserver);
  }
  get courseName(): any {
    return this.course.get('course_name');
  }
}

// export interface NewCourse {
//   courseName: string;
//   courseDesc: string;
//   courseCode: string;
//   accessCode: number;
//   topicNum: number;
// }
