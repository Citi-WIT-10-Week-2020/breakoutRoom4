import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  courses: Array<any>;
  count: number = 0;
  profName: String;
  constructor(private apiservice: APIService) { }
  courseObject: any;
  ngOnInit(): void {
    //initializes the course object. This will eventually be deleted and replaced with user input
    this.courseObject={
      courseName:"A test Course, in object",
      courseDescription:"TESTING TESTING HAHAHA",
      professor:"haku",
      id:uuidv4()
    };

    //creates a professor if there are no current professors. Eventually will be erased or refactored
    console.log(this.courseObject);
    this.apiservice.ListProfessors().then((evt)=>{
      console.log(evt);
      if(evt.items == null){
        this.apiservice.CreateProfessor({
          professorName:"haku",
          id:"0",
          universityName:"UF"
        }).then((evt)=>{
          console.log(evt);
          this.profName=evt.professorName;
        }).catch((err)=>{
          console.log(err);
        })
      }
    }).catch((err)=>{
      console.log(err);
    });

    //grabs all the courses that already exist and stores the info in the variable courses
    this.apiservice.ListCourses().then((evt)=>{
      this.courses = evt.items;
      console.log(evt.items);
    }).catch((err)=>{
      console.log(err);
    });

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
    })
  }

 
  //code for creating a course. This will eventually be moved to the popup for CreateCourse
  async createCourse(){
    await this.apiservice.CreateCourse(this.courseObject).then((evt)=>{
      console.log(evt);
      this.courseObject.id=uuidv4();
    }).catch((err)=>{
      console.log(err);
    })
  }
}


