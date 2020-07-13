import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-screen',
  templateUrl: './topic-screen.component.html',
  styleUrls: ['./topic-screen.component.scss']
})
export class TopicScreenComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  topicId: String;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.topicId = params.get('id'); 
    });
    console.log(this.topicId);
  }

}
