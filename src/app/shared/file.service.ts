import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of ,from} from 'rxjs';
import { ICourse } from './course';
//functions to create, get, update, and delete courses

@Injectable(
   
)

export class FileService{
    constructor(private apiservice: APIService){}

    //function to get 
}