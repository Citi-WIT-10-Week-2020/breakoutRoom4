import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../API.service';
//import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() name: String;
  @Input() courseID: number;
  @Input() description: String;

  constructor(private apiservice: APIService) { }
      
  ngOnInit(): void { }
  
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

    //logic for deleting course. Hardcoded, will update to user input
    async deleteCourse(){
      this.apiservice.DeleteCourse({
        id:"9d556f04-89a8-4ce7-96be-88d7e7e84687"
      }).catch((err)=>{
        console.log(err);
      })
  }
  
}
  
