import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of ,from} from 'rxjs';
import { ITopic } from './topic';



@Injectable(
   
)

export class TopicsService {

    constructor(private apiservice: APIService){}

    getTopics (id:string) : Observable<any> {
        return from(this.apiservice.GetCourse(id));
    }


    createTopic(topic:ITopic){
        return from(this.apiservice.CreateTopic(topic));
        
    }

    updateTopic(topic:ITopic){
        return from(this.apiservice.UpdateTopic(topic));
    }

    deleteTopic(id:string): Observable<any>{
        return from(this.apiservice.DeleteTopic({id}));
    }
}