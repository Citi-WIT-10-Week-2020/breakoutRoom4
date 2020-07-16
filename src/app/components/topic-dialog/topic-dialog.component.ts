import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../../shared/courses.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.scss'],
  providers:[CourseService]
})
export class TopicDialogComponent implements OnInit {
  topic: FormGroup;
  
  ngOnInit() {
    this.topic = new FormGroup({
      topicName: new FormControl(''),
      topicDescription: new FormControl(''),
      topicID: new FormControl(uuidv4())
    })
  };
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TopicDialogComponent>, private courseservice:CourseService) {}
  cancel(): void{
    this.dialogRef.close();

  }
  onSubmit(): void {
    console.log(this.topic.value);
    console.log("submit works");

    // this.courseObject.courseName = this.course.get('course_name').value;
    // this.courseObject.courseDescription = this.course.get('courseDesc').value;
    // this.courseObject.id = this.course.get('identification').value;

    this.courseObject = this.course.value;
    console.log("CourseObject",this.courseObject);
    
    this.dialogRef.close();
    this.createTopic();
  }

  //create a new topic
  async createTopic(){
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
