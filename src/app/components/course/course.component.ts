import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CourseService } from '../../shared/courses.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() name: String;
  @Input() courseID: string;
  @Input() description: String;

  constructor(private apiservice: APIService, private courseservice:CourseService, private _snackBar: MatSnackBar) { }
      
  ngOnInit(): void { }
  
    //copy course id
    /*copyCourseID() {
      const selBox = document.createElement('textarea');
      selBox.select();
      selBox.value = this.courseID;
      document.body.appendChild(selBox);
      document.execCommand('copy');
    }*/

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    //copy pop up
    openSnackBar() {
      this._snackBar.open('Course ID copied!', 'Close', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }

    //logic for deleting course. Hardcoded, will update to user input
    deleteCourse(){
      const myObserver = {
        next: x => {
          console.log('Value: ' , x);
        },
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      };
      this.courseservice.deleteCourse(this.courseID).subscribe(myObserver);
  
    }
     //logic for updating the course. Will eventually be in the update-course-component (popup thing)
  async updateCourse(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    //this.courseservice.updateCourse(this.courseObject).subscribe(myObserver);
  }
  
}
  
