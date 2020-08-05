import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { Hub, Logger} from 'aws-amplify';
<<<<<<< Updated upstream
import { APIService } from 'src/app/API.service';
=======
import { Router } from '@angular/router';
>>>>>>> Stashed changes
import { Observable, of ,from} from 'rxjs';
import { ResourceLoader } from '@angular/compiler';
import { UserinfoService } from '../../../shared/userinfo.service';
import { IAccount } from 'src/app/shared/account';
import { listenerCount } from 'cluster';
import { AccountDialogComponent } from 'src/app/components/account-dialog/account-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers:[UserinfoService],
})


export class NavBarComponent implements OnInit {
  accountObject: IAccount;
 // profName:String;
  firstName: string;
  lastName: string;
  email: string;

<<<<<<< Updated upstream
  constructor(private apiservice: APIService, private userinfo: UserinfoService) {}
=======
  constructor(private userinfo: UserinfoService,private router: Router) {}
>>>>>>> Stashed changes

  ngOnInit(): void {

    /*
    Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
    });
    
  */
    this.firstName = "";
    this.lastName = "";
   
    this.displayName();
    this.subscribeToUpdateProf();
  }

  // uses Hub from Amplify to listen for sign in. sign up, and sign out
  
   displayName () {
    if (this.firstName =="" && this.lastName ==""){
      this.displayUserName();
    }
    const logger = new Logger('My-Logger');
    console.log(logger);
    const listener = (data) => {
      console.log(data);
      switch (data.payload.event) {

         case 'signIn':
           this.router.navigate(['/']);
              location.reload();
              
              this.displayUserName();
              break;
          case 'signUp':
              this.displayUserName();
              break;
          case 'signOut':
<<<<<<< Updated upstream
           //  this.profName = "";
              this.firstName = "";
              this.lastName = "";
           //  console.log(this.profName);
=======
            this.router.navigate(['/']);
             this.profName = "";
             console.log(this.profName);
>>>>>>> Stashed changes
             console.log("sign out");
             location.reload();
          // this.userinfo.logout(this.profName);
          
             break;
      }
    }
    Hub.listen('auth', listener);
  }

  /// when user signs in or signs out, the displayUserName function is called to 
  // read the name using currentUserInfo
  
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

 
    
    const myObserver = {
      next:  x => {
        console.log('Value: ' , x);
     //   this.profName = x.attributes.given_name + " " + x.attributes.family_name;

        this.firstName = x.attributes.given_name;
        this.lastName = x.attributes.family_name;
        this.email = x.attributes.email;
     //   console.log(this.profName);

       

        

      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
   // from(Auth.currentUserInfo()).subscribe(myObserver);
    this.userinfo.getUserInfo().subscribe(myObserver);

    //this.profName = await Auth.currentUserInfo().then((evt)=>  evt.username);

   
  }

  //Updated navbar name
  subscribeToUpdateProf(){
    console.log("in subscribeToUpdateProf");
    this.apiservice.OnUpdateProfessorListener.subscribe((event)=>{
      const data = (event as any).value.data.onUpdateProfessor;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      console.log("HERE", data.firstName,  data.lastName);
    });
  }

  


}
