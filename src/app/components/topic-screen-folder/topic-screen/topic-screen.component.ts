import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { title } from 'process';


@Component({
  selector: 'app-topic-screen',
  templateUrl: './topic-screen.component.html',
  styleUrls: ['./topic-screen.component.scss']
})



export class TopicScreenComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  topicId: String;
  topicName: String;
  courseId: String;
  rgObject: any;
  
  ngOnInit(): void {

    this.rgObject={
      rgName: "title",
      fileName: "name of file",
    };



    //gets courseID
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });
    console.log(this.courseId);

    //gets topicID
    this.route.paramMap.subscribe(params => { 
      this.topicId = params.get('id'); 
      this.topicName = params.get('TopicName'); 
    });

    console.log(this.topicId);
    console.log(this.topicName);
  
}

}

