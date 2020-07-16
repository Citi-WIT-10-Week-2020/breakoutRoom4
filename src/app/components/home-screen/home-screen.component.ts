import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {LayoutModule} from '@angular/cdk/layout';


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
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
   styles = {
    cols:1,
    rows: 3,
    color:'lightblue'
  }
  courses: Array<any>;
  courseObject: ICourse;  //to be deleted
  
  

  constructor(private apiservice: APIService,private courseservice:CourseService, private breakpointObserver: BreakpointObserver) { 

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
    //initializes the course object. This will eventually be deleted and replaced with user input
    this.courseObject={
      courseName:"A test Course, in object",
      courseDescription:"TESTING TESTING HAHAHA",
      professor:"haku",
      id:uuidv4()
    };

    

   
    //get all courses
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
        this.courses = x.items;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.getCourses().subscribe(myObserver);


    //subscribes to any new course creations
    this.apiservice.OnCreateCourseListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onCreateCourse;
      this.courses =[...this.courses,data];
    });

      //subscribes to any course updates
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


    //subscribes to any course deletions
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

  

 
  //code for creating a course. This will eventually be moved to the popup for CreateCourse
  async createCourse(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' , err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseObject.id = uuidv4();
    this.courseservice.createCourse(this.courseObject).subscribe(myObserver);
  }
}


