import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { Hub, Logger} from 'aws-amplify';
import { from } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent implements OnInit , OnChanges{
  profName:String;

  constructor() {}

  ngOnInit(): void {

    /*
    Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
    });
 
    this.profName = "";
    
    */

    this.displayName();

  }

  // uses Hub from Amplify to listen for sign in. sign up, and sign out
  
   displayName () {

    const logger = new Logger('My-Logger');
    console.log(logger);
    const listener = async (data) => {
      console.log(data);
      switch (data.payload.event) {

         case 'signIn':
              await this.displayUserName();
              break;
          case 'signUp':
              await this.displayUserName();
             break;
          case 'signOut':
             this.profName = "";
             console.log(this.profName);
             console.log("sign out");
             break;
      }
    }
    console.log("in the function");
    Hub.listen('auth', listener);
  }

  /// when user signs in or signs out, the displayUserName function is called to 
  // read the name using currentUserInfo
  ngOnChanges(changes: SimpleChanges){
    console.log("ONCHANGES RAAAAN");
    console.log("PROFESSOR NAME: "+ this.profName);
  }
  async displayUserName() {
    //wrap in observable, and have profName subscribe :) rxjs 
    /*const observable =Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
      console.log("CHANGED PROFNAME: " + this.profName);
    });*/

    this.profName = await Auth.currentUserInfo().then((evt)=>  evt.username);

    console.log("in displayUserName");
  }

} 


  





