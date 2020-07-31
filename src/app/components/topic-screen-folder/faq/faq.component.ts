import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateFaqDialogComponent } from 'src/app/components/topic-screen-folder/update-faq-dialog/update-faq-dialog.component';
import { DeleteFaqDialogComponent } from 'src/app/components/topic-screen-folder/delete-faq-dialog/delete-faq-dialog.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string;
  @Input() faqId: string;
  @Input() course: string;
  @Input() topic: string;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openUpdateFaqDialog() {
      console.log("dialog opened");
      const dialogConfig = new MatDialogConfig();
      let dialogRef = this.matDialog.open(UpdateFaqDialogComponent, dialogConfig);
      let instance =  dialogRef.componentInstance;
      instance.question = this.question;
      instance.answer = this.answer;
      instance.id = this.faqId;
      instance.course = this.course;
      instance.topic = this.topic;
      dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
  }

  openDeleteFaqDialog() {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DeleteFaqDialogComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
    instance.id = this.faqId;
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
  }

}
