import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {LayoutModule} from '@angular/cdk/layout';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DialogBodyComponent } from 'src/app/components/dialog-body/dialog-body.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {CourseService} from '../../shared/courses.service';
import { ICourse } from '../../shared/course';

import { UserinfoService } from 'src/app/shared/userinfo.service';

/* May use for grid */
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  providers:[CourseService,UserinfoService]
})
export class HomeScreenComponent implements OnInit {

  courses: Array<any>;  
  user: any;
  
  constructor(private userinfo: UserinfoService, private apiservice: APIService,private matDialog: MatDialog, private courseservice:CourseService, private breakpointObserver: BreakpointObserver) { 

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
    this.getUser();
   
    this.subscribeToCourseCreations();
    this.subscribeToCourseUpdates();
    this.subscribeToCourseDeletions();
  }
  getUser(){
    console.log("Getting User");
    const myObserver = {
      next: x => {
        console.log('User: ' , x);
        this.user = x;
        //call get professor using the username. If that doesn't exist, create a professor
        this.apiservice.ProfessorByName(this.user.username).then((evt)=>{
          console.log(evt);
          if(evt.items.length == 0){
            console.log("NULL! Create professor");
            this.apiservice.CreateProfessor({id:uuidv4(),professorName:this.user.username, universityName:"Default"}).then((evt)=>{
              console.log("Professor was created!");
              this.getCourses();
            });
          }
          else{
            this.getCourses();
          }
        });

        
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
   // from(Auth.currentUserInfo()).subscribe(myObserver);
    this.userinfo.getUserInfo().subscribe(myObserver);
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
    console.log("Getting Courses", this.user.username);
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
        console.log()
        this.courses = x.items[0].courses.items;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.getCourses(this.user.username).subscribe(myObserver);
  }

  openCourseDialog() {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
      instance.professorName = this.user.username;
      
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   } //instead of console log , refresh page
 
  
  
}


