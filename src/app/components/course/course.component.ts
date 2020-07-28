import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CourseService } from '../../shared/courses.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateDialogComponent } from 'src/app/components/update-dialog/update-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {ClipboardModule} from '@angular/cdk/clipboard';

import { CopyDialogComponent } from '../copy-dialog/copy-dialog.component';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  @Input() name: string;
  @Input() courseId: string;
  @Input() description: string;
  @Input() professor: string;


  constructor(private apiservice: APIService, private courseservice:CourseService, private matDialog: MatDialog, private copyDialog: MatDialog, private deleteDialog: MatDialog) { }
      
  ngOnInit(): void { }
  
    //copy course id
    /*copyCourseID() {
      const selBox = document.createElement('textarea');
      selBox.select();
      selBox.value = this.courseID;
      document.body.appendChild(selBox);
      document.execCommand('copy');
    }*/

    openCopyDialog() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            courseId: this.courseId,
        };
      
        //this.copyDialog.open(CopyDialogComponent, dialogConfig);

        let dialogRef = this.copyDialog.open(CopyDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});  
    }

    openUpdateDialog() {
      // courseName = this.name;
      // courseDescription = this.description;
      console.log("dialog opened");
      const dialogConfig = new MatDialogConfig();
      let dialogRef = this.matDialog.open(UpdateDialogComponent, dialogConfig);
      let instance =  dialogRef.componentInstance;
      instance.name = this.name;
      instance.description = this.description;
      instance.courseId = this.courseId;
      instance.professor = this.professor;
      dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
     }

     openDeleteDialog(){
      console.log("dialog opened");
      const dialogConfig = new MatDialogConfig();
      let dialogRef = this.matDialog.open(DeleteDialogComponent, dialogConfig);
      let instance =  dialogRef.componentInstance;
      instance.courseId = this.courseId;
      dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
     }

     
  }
  


