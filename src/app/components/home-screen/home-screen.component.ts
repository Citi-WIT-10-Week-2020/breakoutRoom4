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
    
    this.courseObject={
      courseName:"A test Course, in object",
      courseDescription:"TESTING TESTING HAHAHA",
      professor:"haku",
      id:uuidv4()
    };
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
    })
    this.apiservice.ListCourses().then((evt)=>{
      this.courses = evt.items;
      console.log(evt.items);
    }).catch((err)=>{
      console.log(err);
    });

    this.apiservice.OnCreateCourseListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onCreateCourse;
      this.courses =[...this.courses,data];
    })
  }

  async createCourse(){
    await this.apiservice.CreateCourse(this.courseObject).then((evt)=>{
      console.log(evt);
      this.courseObject.id=uuidv4();
    }).catch((err)=>{
      console.log(err);
    })
  }

}
