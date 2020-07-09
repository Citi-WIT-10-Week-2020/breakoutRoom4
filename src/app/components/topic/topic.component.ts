import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topicID: number;
  @Input() topic: String;
  @Input() professor: String;
  @Input() topicDescription: String;

  constructor() { }

  ngOnInit(): void {
  }

  //will be able to edit a certain topic
  updateTopic() {}

  //will be able to delete a certain topic
  deleteTopic() {}

}
