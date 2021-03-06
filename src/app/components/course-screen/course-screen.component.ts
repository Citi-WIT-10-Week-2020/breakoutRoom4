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
import {CourseService} from '../../shared/courses.service';
import { UserInfo } from 'os';
import { UserinfoService } from 'src/app/shared/userinfo.service';

@Component({
  selector: 'app-course-screen',
  templateUrl: './course-screen.component.html',
  styleUrls: ['./course-screen.component.scss'],
  providers:[TopicsService,UserinfoService]
})

export class CourseScreenComponent implements OnInit {
  
  

  courseId: string; //passed in from home
  topics: Array<any>; //all the topics from the course
  
  course: String;
  professorName: string;
  courseName: string;

  isProfessor: boolean ;

  constructor(private route: ActivatedRoute, private matDialog: MatDialog,private apiservice : APIService, private breakpointObserver: BreakpointObserver, private topicservice:TopicsService,private userinfo:UserinfoService) { }
  

  ngOnInit(): void {
    //get isProfessor
    this.getUserStatus();
    //gets the course ID passed in from home-screen
    this.route.paramMap.subscribe(params => { 
      this.courseId = params.get('id'); 
      console.log("courseId", this.courseId);
    });
   this.getTopics();
   this.subscibeToTopicCreations();
   this.subscribeToTopicDeletions();
   this.subscribeToTopicDeletions(); 
  }

  getUserStatus(){
    const myObserver = {
      next: x =>{
        let status = x.attributes.name;
        (x.attributes.name == "Professor") ? this.isProfessor = true : this.isProfessor = false;
        console.log("Professor Status: ", this.isProfessor);
      }
    }
    this.userinfo.getUserInfo().subscribe(myObserver);
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
       this.course = x.courseName;
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

