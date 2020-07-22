import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { v4 as uuidv4 } from 'uuid';
import Amplify, { Auth } from 'aws-amplify';
import { Observable, of ,from} from 'rxjs';
import { ICourse } from './course';
import { Hub} from 'aws-amplify';
import { ConsoleLogger } from '@aws-amplify/core';
import { mixinColor } from '@angular/material/core';
//import { ConsoleReporter } from 'jasmine';

//whole user info
//get username
//get whether user is professor or student
//sign out: change username to space

@Injectable(

)
export class UserinfoService{
 
    constructor() { 
        
    }

    getUserInfo () {
        
      return from(Auth.currentUserInfo());
    }

    
    
    

}

