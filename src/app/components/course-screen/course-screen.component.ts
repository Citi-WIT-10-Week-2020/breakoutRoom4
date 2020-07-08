import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-course-screen',
  templateUrl: './course-screen.component.html',
  styleUrls: ['./course-screen.component.scss']
})
export class CourseScreenComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  topicId: String= "default";
  ngOnInit(): void {
    console.log(this.topicId);
    this.route.paramMap.subscribe(params => { 
      this.topicId = params.get('id'); 
    });
    /*this.route.queryParams.subscribe(params => {
      console.log(params['id']);
      this.topicId = params['id'];
    });*/
  }

}
