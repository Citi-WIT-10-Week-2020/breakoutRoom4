import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import {ITopic} from '../../shared/topic';
import { TopicsService } from 'src/app/shared/topics.service';

@Component({
  selector: 'app-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.scss'],
  providers:[TopicsService]
})
export class TopicDialogComponent implements OnInit {
  topic: FormGroup;
  topicObject : ITopic;

  ngOnInit() {
    this.topic = new FormGroup({
      topicName: new FormControl(''),
      topicDescription: new FormControl(''),
      topicID: new FormControl(uuidv4()),
      professor : new FormControl('Mr. Bean'), 
      course : new FormControl('sciences'),
    })
  };
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TopicDialogComponent>, private topicservice:TopicsService) {}
  
  cancel(): void{
    this.dialogRef.close();
  }
  onSubmit(): void {
    console.log(this.topic.value);
    console.log("submit works");
    
    this.topicObject = this.topic.value;
    console.log("TopicObject",this.topicObject);
    
    this.dialogRef.close();
    this.createTopic();
  }

  //create a new topic
  async createTopic(){
    console.log('clicked');
    const myObserver = {
      next: x => {
        console.log('create topic' , x);
      },
      error: err => console.error('Observer got an error: ' , err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.topicObject.id = uuidv4();
    this.topicservice.createTopic(this.topicObject).subscribe(myObserver);

  }
}
