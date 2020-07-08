import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})

export class DialogBodyComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogBodyComponent>) {}
    courseName = new FormControl('');  
    courseDesc = new FormControl('');
    courseCode = new FormControl('');
    accessCode = new FormControl('');
    topicNum = new FormControl('');
  
  close() {   
    this.dialogRef.close();
  }

}
