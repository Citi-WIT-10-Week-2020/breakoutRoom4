import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../shared/courses.service';
import { MatDialogRef } from "@angular/material/dialog";
import { Input } from '@angular/core'

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  providers:[CourseService]
})
export class DeleteDialogComponent implements OnInit {
  @Input() courseId : string;
  @Input() isProfessor : boolean;
  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent>, private courseservice:CourseService) {}

  ngOnInit(): void {
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
      if(this.isProfessor){
        this.courseservice.deleteCourse(this.courseId).subscribe(myObserver);
      }
      else{
        console.log("Deleting student course");
        this.courseservice.deleteStudentCourse(this.courseId).subscribe(myObserver);
      }
      
      this.dialogRef.close();
    }


    cancel(): void{
      this.dialogRef.close();
    }
}
