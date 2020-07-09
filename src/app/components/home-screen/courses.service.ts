import { Injectable } from '@angular/core';
import { APIService } from '../../API.service';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of ,from} from 'rxjs';
import { ICourse } from './course';
//functions to create, get, update, and delete courses

@Injectable(
   
)
export class CourseService{
    constructor(private apiservice: APIService){}

    getCourses() : Observable<any> {
        return from(this.apiservice.ListCourses());
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
}