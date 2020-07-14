import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { Hub, Logger} from 'aws-amplify';

import { Observable, of ,from} from 'rxjs';
import { ResourceLoader } from '@angular/compiler';
import { UserinfoService } from '../../../shared/userinfo.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers:[UserinfoService]
})


export class NavBarComponent implements OnInit {
  profName:String;


  constructor(private userinfo: UserinfoService) {}

ngOnInit(): void {

    /*
    Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
    });
    
  */
    this.profName = "";
   
    this.displayName();

  }

  // uses Hub from Amplify to listen for sign in. sign up, and sign out
  
   displayName () {
    if (this.profName ==""){
      this.displayUserName();
    }
    const logger = new Logger('My-Logger');
    console.log(logger);
    const listener = (data) => {
      console.log(data);
      switch (data.payload.event) {

         case 'signIn':
              this.displayUserName();
              break;
          case 'signUp':
              this.displayUserName();
              break;
          case 'signOut':
             this.profName = "";
             console.log(this.profName);
             console.log("sign out");
             location.reload();
          // this.userinfo.logout(this.profName);
             break;
      }
    }
    console.log("in the function");
    Hub.listen('auth', listener);
  }

  /// when user signs in or signs out, the displayUserName function is called to 
  // read the name using currentUserInfo
  /*ngOnChanges(changes: SimpleChanges){
    console.log("ONCHANGES RAAAAN");
    console.log("PROFESSOR NAME: "+ this.profName);
*/
  displayUserName() {
    //wrap in observable, and have profName subscribe :) rxjs 
    /*
    const observable =Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
      console.log("CHANGED PROFNAME: " + this.profName);
    });
    */

 
  //this.userinfo.getUserInfo();
 // this.profName = this.userinfo.getUsername();
  //console.log("nav bar name", this.profName); //name not here

  console.log("in displayUserName");
    
    const myObserver = {
      next: x => {
        console.log('Value: ' , x);
        this.profName = x.attributes.given_name + " " + x.attributes.family_name;
        //this.profName = x.username;
        console.log(this.profName);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
   // from(Auth.currentUserInfo()).subscribe(myObserver);
    this.userinfo.getUserInfo().subscribe(myObserver);

    //this.profName = await Auth.currentUserInfo().then((evt)=>  evt.username);

    

   
  }

 

} 


  





