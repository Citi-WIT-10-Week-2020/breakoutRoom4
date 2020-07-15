import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {LayoutModule} from '@angular/cdk/layout';
import { DialogBodyComponent } from 'src/app/components/dialog-body/dialog-body.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

/* May use for grid */
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


import {CourseService} from '../../shared/courses.service';

import { ICourse } from '../../shared/course';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  providers:[CourseService]
})
export class HomeScreenComponent implements OnInit {

  /* May use for grid */
  /*tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
   styles = {
    cols:1,
    rows: 3,
    color:'lightblue'
  }*/
  courses: Array<any>;
  
  
  


  constructor(private apiservice: APIService,private matDialog: MatDialog, private courseservice:CourseService, private breakpointObserver: BreakpointObserver) { 

    /* //Might use this for the responsive layout (uses breakpoint import statment)
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });*/
  } 

  

  ngOnInit(): void {
    this.getCourses();
    this.subscribeToCourseCreations();
    this.subscribeToCourseUpdates();
    this.subscribeToCourseDeletions();
  }

  subscribeToCourseDeletions(){
    this.apiservice.OnDeleteCourseListener.subscribe((evt)=>{
      console.log("A deletion has occured!");
      const data = (evt as any).value.data.onDeleteCourse;
      console.log(data);
      //basically, search thru array, find original, remove it
      this.courses = this.courses.filter((course)=>{
          return (course.id != data.id)
      });
      console.log(this.courses);
    });
  }

  subscribeToCourseCreations(){
    this.apiservice.OnCreateCourseListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onCreateCourse;
      this.courses =[...this.courses,data];
    });
  }
  subscribeToCourseUpdates(){
    this.apiservice.OnUpdateCourseListener.subscribe((evt)=>{
     
      const data = (evt as any).value.data.onUpdateCourse;
      this.courses =[...this.courses,data];
      console.log("An update has occurred!");
      //search thru array, find original, and replace it with the new one
      this.courses = this.courses.map((course)=>{
        if(course.id == data.id){
          return data;
        }
        else return course;
      })
    });
  }

  getCourses(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
        this.courses = x.items;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.getCourses().subscribe(myObserver);
  }

  openCourseDialog() {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   } //instead of console log , refresh page
 
  
  
}


