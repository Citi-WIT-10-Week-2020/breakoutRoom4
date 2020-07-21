import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
import { TopicsService } from '../../shared/topics.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UpdateTopicDialogComponent } from '../update-topic-dialog/update-topic-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteTopicDialogComponent } from '../delete-topic-dialog/delete-topic-dialog.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  providers: [TopicsService]
})
export class TopicComponent implements OnInit {

  @Input() topicID: string;
  @Input() topic: string;
  @Input() professor: string;
  @Input() topicDescription: string;
  @Input() className: string;

  constructor(private apiservice: APIService, private matDialog: MatDialog, private topicservice:TopicsService) {}

  ngOnInit(): void {
  }

  //will be able to edit a certain topic
  // deleteTopic() {
  //   const myObserver = {
  //     next: x => {
  //       console.log('Value: ' , x);
  //     },
  //     error: err => console.error('Observer got an error: ' + err),
  //     complete: () => console.log('Observer got a complete notification'),
  //   };
  //   this.topicservice.deleteTopic(this.topicID.toString()).subscribe(myObserver);
  // }
  openUpdateTopicDialog(){
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(UpdateTopicDialogComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
    instance.topic = this.topic;
    instance.topicDescription = this.topicDescription;
    instance.topicID  = this.topicID;
    instance.professor = this.professor;
    instance.className = this.className;
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});

  }

  openDeleteTopicDialog(){
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DeleteTopicDialogComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
    instance.topicID  = this.topicID;
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});

  }


  //will be able to delete a certain topic
  // updateTopic() {
  //   const myObserver = {
  //     next: x => {
  //       console.log('Value: ' , x);
  //     },
  //     error: err => console.error('Observer got an error: ' + err),
  //     complete: () => console.log('Observer got a complete notification'),
  //   };
   // this.topicservice.updateTopic(this.topicObject).subscribe(myObserver);
  }




