import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CourseService } from '../../shared/courses.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {UpdateDialogComponent} from 'src/app/components/update-dialog/update-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  @Input() name: string;
  @Input() courseID: string;
  @Input() description: string;
  @Input() professor: string;

  constructor(private apiservice: APIService, private courseservice:CourseService, private _snackBar: MatSnackBar, private matDialog: MatDialog) { }
      
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

    openUpdateDialog() {
      // courseName = this.name;
      // courseDescription = this.description;
      console.log("dialog opened");
      const dialogConfig = new MatDialogConfig();
      let dialogRef = this.matDialog.open(UpdateDialogComponent, dialogConfig);
      let instance =  dialogRef.componentInstance;
      instance.name = this.name;
      instance.description = this.description;
      instance.courseID = this.courseID;
      instance.professor = this.professor;
      dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
     }

     //logic for updating the course. Will eventually be in the update-course-component (popup thing)
 
    //this.courseservice.updateCourse(this.courseObject).subscribe(myObserver);
  }
  

  
