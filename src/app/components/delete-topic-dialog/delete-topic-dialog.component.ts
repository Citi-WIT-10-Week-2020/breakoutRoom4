import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../shared/topics.service';
import { MatDialogRef } from "@angular/material/dialog";
import { Input } from '@angular/core'

@Component({
  selector: 'app-delete-topic-dialog',
  templateUrl: './delete-topic-dialog.component.html',
  styleUrls: ['./delete-topic-dialog.component.scss'],
  providers:[TopicsService]
})
export class DeleteTopicDialogComponent implements OnInit {
  @Input() topicID : string;

  constructor( public dialogRef: MatDialogRef<DeleteTopicDialogComponent>, private topicservice:TopicsService) {}

  ngOnInit(): void {
  }
  deleteTopic() {
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.topicservice.deleteTopic(this.topicID.toString()).subscribe(myObserver);
    this.dialogRef.close();
  }
  cancel(): void{
    this.dialogRef.close();
  }
}
