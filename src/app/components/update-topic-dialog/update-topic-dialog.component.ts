import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Input } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { TopicsService } from '../../shared/topics.service';
import { v4 as uuidv4 } from 'uuid';
import { ITopic } from 'src/app/shared/topic';

@Component({
  selector: 'app-update-topic-dialog',
  templateUrl: './update-topic-dialog.component.html',
  styleUrls: ['./update-topic-dialog.component.scss'],
  providers:[TopicsService]

})
export class UpdateTopicDialogComponent implements OnInit {

  @Input() topic : string;
  @Input() topicDescription : string;
  @Input() professor : string;
  @Input() topicID : string;
  @Input() className : string;

  topicForm : FormGroup;
  topicObject: ITopic;
  
  ngOnInit() {

    this.topicObject = { 
      TopicName : this.topic,
      TopicDescription : this.topicDescription,
      professor : this.professor,
      id : this.topicID,
      course : this.className
    }

    this.topicForm = new FormGroup({
      topicName: new FormControl(''),
      topicDescription: new FormControl('')

    })
    console.log("OLD INFO", this.topicObject);

  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateTopicDialogComponent>, private topicservice:TopicsService) {}

  onSubmit(): void {
    console.log(this.topicForm.value);
    console.log("submit works");

    if(this.topicForm.get('topicName').value != ''){
      this.topicObject.TopicName = this.topicForm.get('topicName').value;
      this.topic = this.topicForm.get('topicName').value;
      console.log("new topic name");
    }
    else{this.topicObject.TopicName = this.topic;}

    if(this.topicForm.get('topicDescription').value != ''){
      this.topicObject.TopicDescription = this.topicForm.get('topicDescription').value;
      this.topicDescription = this.topicForm.get('topicDescription').value;
      console.log("new topic description");
    }
    else {this.topicObject.TopicDescription = this.topicDescription;}
    // this.name = this.course.get('courseName').value;
    // this.description = this.course.get('courseDescription').value;
    //this.courseObject = this.course.value;
    console.log("NEW INFO", this.topicObject);


    this.updateTopic();
    this.dialogRef.close();
  }

  cancel(): void{
    this.dialogRef.close();
    console.log("NEW INFO", this.topicObject);

  }

  updateTopic() {
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    }
    this.topicservice.updateTopic(this.topicObject).subscribe(myObserver);

  }
}
