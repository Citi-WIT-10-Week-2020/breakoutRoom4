import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
import { TopicsService } from '../../shared/topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],

})
export class TopicComponent implements OnInit {

  @Input() topicID: number;
  @Input() topic: String;
  @Input() professor: String;
  @Input() topicDescription: String;

  constructor(private apiservice: APIService, private topicservice:TopicsService) {}

  ngOnInit(): void {
  }

  //will be able to edit a certain topic
  deleteTopic() {
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.topicservice.deleteTopic(this.topicID.toString()).subscribe(myObserver);
  }

  //will be able to delete a certain topic
  updateTopic() {
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
   // this.topicservice.updateTopic(this.topicObject).subscribe(myObserver);
  }



}
