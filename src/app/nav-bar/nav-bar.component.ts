import { Component, OnInit, OnChanges } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { Hub, Logger} from 'aws-amplify';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent implements OnInit {
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
             break;
      }
    }
    console.log("in the function");
    Hub.listen('auth', listener);
  }

  /// when user signs in or signs out, the displayUserName function is called to 
  // read the name using currentUserInfo
  displayUserName() {
    Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
    });

    console.log("in displayUserName");
  }

} 


  





