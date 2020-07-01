import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
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

  ngOnInit(): void {
    this.apiservice.ListProfessors().then((evt)=>{
      console.log(evt);
      if(evt.items.length == 0){
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

  createCourse(){
    this.apiservice.CreateCourse({
      courseName:"A test Course",
      courseDescription:"TESTING TESTING HAHAHA",
      professor:"haku",
      id:this.count.toString()
    }).then((evt)=>{
      console.log(evt);
    });
  }

}
