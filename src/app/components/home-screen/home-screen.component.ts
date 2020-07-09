import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import { CourseService } from '../../shared/courses.service';
import { ICourse } from '../../shared/course';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  providers:[CourseService]
})
export class HomeScreenComponent implements OnInit {
  courses: Array<any>;
  courseObject: ICourse;  //to be deleted
  
  constructor(private apiservice: APIService,private courseservice:CourseService) { }
  
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
      //need to search thru array, find original, and replace it with the new one  TnT ALGORITHMS
      const data = (evt as any).value.data.onUpdateCourse;
      this.courses =[...this.courses,data];
      console.log("An update has occurred!")
    });

    //subscribes to any course deletions
    this.apiservice.OnDeleteCourseListener.subscribe((evt)=>{
      console.log("A deletion has occured!");
      console.log(evt);
      //basically, search thru array, find original, remove it
    });
  }

  

 
  //code for creating a course. This will eventually be moved to the popup for CreateCourse
  async createCourse(){
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.courseservice.createCourse(this.courseObject).subscribe(myObserver);
  }
}


