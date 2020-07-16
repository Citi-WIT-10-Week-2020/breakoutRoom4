import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CourseService } from '../../shared/courses.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {UpdateDialogComponent} from '../update-dialog/update-dialog.component';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() name: string;
  @Input() courseID: string;
  @Input() description: string;

  constructor(private apiservice: APIService, private matDialog: MatDialog, private courseservice:CourseService) { }
      
  ngOnInit(): void { }

    

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
      dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
     }

     //logic for updating the course. Will eventually be in the update-course-component (popup thing)
 
    //this.courseservice.updateCourse(this.courseObject).subscribe(myObserver);
  }
  

  
