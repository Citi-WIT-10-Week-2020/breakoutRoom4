import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import {TopicsService} from '../../shared/topics.service';
import { ITopic } from '../../shared/topic';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {LayoutModule} from '@angular/cdk/layout';
import { Tile } from '../home-screen/home-screen.component';
import { ConsoleLogger } from '@aws-amplify/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {TopicDialogComponent} from '../topic-dialog/topic-dialog.component';

@Component({
  selector: 'app-course-screen',
  templateUrl: './course-screen.component.html',
  styleUrls: ['./course-screen.component.scss'],
  providers:[TopicsService]
})

export class CourseScreenComponent implements OnInit {
  
  

  courseId: string;
  topics: Array<any>;
  professorName : string;
  courseName : string;

  constructor(private route: ActivatedRoute, private matDialog: MatDialog,private apiservice : APIService, private breakpointObserver: BreakpointObserver, private topicservice:TopicsService) { }
  

  ngOnInit(): void {
    //gets the course ID passed in from home-screen
    this.route.paramMap.subscribe(params => { 
      this.courseId = params.get('id'); 
      console.log("courseId", this.courseId);
    });
    
 /*   
    //gets all the topics using courseId
    this.apiservice.GetCourse(this.courseId.toString()).then((evt)=>{
      console.log("topic", evt);
      this.topics = evt.topics.items;
      console.log('this.topics', this.topics);
    }).catch((err)=>{
      console.log(err);
    });
*/    
   
   
   this.getTopics();
   this.subscibeToTopicCreations();
   this.subscribeToTopicDeletions();
   this.subscribeToTopicDeletions(); 
  }

  subscibeToTopicCreations(){
    this.apiservice.OnCreateTopicListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onCreateTopic;
      this.topics =[...this.topics,data];
    });
  }
  subscribeToTopicUpdates(){
    this.apiservice.OnUpdateTopicListener.subscribe((evt)=>{
      console.log("HERE");
      const data = (evt as any).value.data.onUpdateTopic;
      console.log("data", data);
      
      console.log("An update has occurred!");
      //search thru array, find original, and replace it with the new one
      this.topics = this.topics.map((topic)=>{
        if(topic.id == data.id){
          return data;
        }
        else return topic;
      })
    });
  }
  subscribeToTopicDeletions(){
    this.apiservice.OnDeleteTopicListener.subscribe((evt)=>{
      console.log("HEREE");
      console.log("A deletion has occured!");
      const data = (evt as any).value.data.onDeleteTopic;
      console.log(data);
      //basically, search thru array, find original, remove it
      this.topics = this.topics.filter((topic)=>{
          return (topic.id != data.id)
      });
      console.log(this.topics);
    });
  }
  getTopics(){
    const myObserver = {
      next: x => {
       console.log("get topics" , x);
       
        this.topics = x.topics.items;
        console.log("topics", this.topics);
        //also set professor and course name
        this.courseName = x.courseName;
        this.professorName = x.professor;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
      this.topicservice.getTopics(this.courseId).subscribe(myObserver);
  }
  //open topic dialog
  openTopicDialog() {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(TopicDialogComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
    instance.professorName = this.professorName;
    instance.courseName = this.courseName;
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   }
}

