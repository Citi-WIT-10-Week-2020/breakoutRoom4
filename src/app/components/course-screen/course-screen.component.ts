import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import { DialogBodyComponent } from 'src/app/components/dialog-body/dialog-body.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-course-screen',
  templateUrl: './course-screen.component.html',
  styleUrls: ['./course-screen.component.scss']
})

export class CourseScreenComponent implements OnInit {

  courseId: String;
  topics: Array<any>;
  topicObject: any;

  constructor(private route: ActivatedRoute, private apiservice : APIService, private matDialog: MatDialog,) { }

  ngOnInit(): void {

    this.topicObject={
      professor: "Mr. Default",
      TopicName: "Default Topic",
      TopicDescription: "this practice baby",
      id: 123
    };
    //gets the course ID passed in from home-screen
    console.log(this.courseId);
    this.route.paramMap.subscribe(params => { 
      this.courseId = params.get('id'); 
    });
    //gets all the topics using courseId
    this.apiservice.GetCourse(this.courseId.toString()).then((evt)=>{
      console.log(evt);
      this.topics = evt.topics.items;
      console.log(this.topics);
    }).catch((err)=>{
      console.log(err);
    });

    //subscribe to any topic creations
    
  }
  openTopicDialog() {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   } //instead of console log , refresh page
  //create a new topic
  createTopic(){

  }
}
