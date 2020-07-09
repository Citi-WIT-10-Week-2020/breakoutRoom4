import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-course-screen',
  templateUrl: './course-screen.component.html',
  styleUrls: ['./course-screen.component.scss']
})
export class CourseScreenComponent implements OnInit {

  courseId: String;
  topics: Array<any>;
  topicObject: any;

  constructor(private route: ActivatedRoute, private apiservice : APIService) { }

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
    })

    //subscribe to any topic creations
    
  }

  //create a new topic
  createTopic(){

  }
}
