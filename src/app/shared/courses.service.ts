import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of ,from} from 'rxjs';
import { ICourse } from './course';
import API, { graphqlOperation } from "@aws-amplify/api";
//functions to create, get, update, and delete courses

@Injectable(
   
)
export class CourseService{
    constructor(private apiservice: APIService){}
    getStudentCourses(student:string): Observable<any>{
      const studentByName = `query studentByName($studentName:ID!){
        studentByName(studentName:$studentName){
          items{
            id
            universityName
            studentName
            courses{
              items{
                id
                course{
                  id
                  courseName
                  courseDescription
                  professor
                }
              }
            }
          }
        }
      }`

      return from(API.graphql(graphqlOperation(studentByName,{studentName:student})));
    }
    getCourses(professor:string) : Observable<any> {
        //return from(this.apiservice.ListCourses());
        const professorByName = `query ProfessorByName($professorName:String){
            professorByName(professorName:$professorName){
              items{
                professorName
                universityName
                courses{
                  items{
                    courseName
                    courseDescription
                    id
                  }
                }
              }
            }
          }`
        return from(API.graphql(graphqlOperation(professorByName,{professorName: professor})));
        //return from(this.apiservice.ProfessorByName(professor));
    }

    createCourse(course:ICourse){
        return from(this.apiservice.CreateCourse(course));
    }

    updateCourse(course:ICourse){
        return from(this.apiservice.UpdateCourse(course));
    }

    deleteCourse(id:string): Observable<any>{
        return from(this.apiservice.DeleteCourse({id}));
    }

    deleteStudentCourse(id:string): Observable<any>{
      return from(this.apiservice.DeleteStudentCourse({id}));
    }
}