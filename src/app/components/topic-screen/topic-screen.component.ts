import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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

  ngOnInit(): void {

    //gets courseID
    this.route.parent.paramMap.subscribe(params => {
      this.courseId = params.get('id');
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

