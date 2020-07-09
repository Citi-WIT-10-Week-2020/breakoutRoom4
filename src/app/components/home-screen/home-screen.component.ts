import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';

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
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  /* May use for grid */
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

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

  //logic for deleting course. Hardcoded, will update to user input
  deleteCourse(){
    this.apiservice.DeleteCourse({
      id:"9d556f04-89a8-4ce7-96be-88d7e7e84687"
    }).catch((err)=>{
      console.log(err);
    })
  }
  //logic for updating the course. Hardcoded for now, but will be converted to user input
  async updateCourse(){
    this.apiservice.UpdateCourse({
      id:"9d556f04-89a8-4ce7-96be-88d7e7e84687",
      
      courseDescription:"UPDATE2e",
      courseName:"Updating the name"
    }).catch((err)=>{
      console.log(err);
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
