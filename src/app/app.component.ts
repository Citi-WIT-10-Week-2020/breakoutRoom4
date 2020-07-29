import { Component, OnInit} from '@angular/core';
import Amplify, {Auth} from 'aws-amplify'
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { Hub, Logger} from 'aws-amplify';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
//import {HomeScreenComponent} from './components/home-screen.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acornSQURL';
  formFields: FormFieldTypes;
  displayLogo = false;

  constructor(
    private router: Router
  ) {
    this.formFields = [
      {
        type: "given_name",
        label: "First Name",
        placeholder: "First Name",
        required: true,
      },
      {
        type: "family_name",
        label: "Last Name",
        placeholder: "Last Name",
        required: true,
      },
      {
        type: "email",
        label: "Email",
        placeholder: "your@email.com",
        required: true,
      },
      {
        type: "password",
        label: "Password",
        placeholder: "........",
        required: true,
      },
      {
        type: "phone_number",
        label: "Phone Number",
        placeholder: "469-555-4567",
        required: true,
      },
      {
        type: "name",
        label: "Are you a Professor or a Student?",
        placeholder: "\"Professor\" or \"Student\"",
        required: true,
        //for later: check value of this field and throw error
      },
      


    ];
    
    
  }

  ngOnInit(): void {
     
   // this.displayFunction();   // listens for sign in/sign out
    this.signIn();
    
    this.router.navigate(['/']);
}
  
// wait for sign in to change displayLogo variable 
// (reload is done in navbar.ts upon sign in and sign out)
 async signIn () {
    console.log("signed in", (await Auth.currentCredentials()).authenticated);
    let current = (await Auth.currentCredentials()).authenticated;
    
    if (current == undefined){
      this.displayLogo = true;
    } else if (current == true){
      this.displayLogo = false;
      
      //removes flex class and center id
      document.getElementById("removable").removeAttribute("class");
     document.getElementById("center").removeAttribute("id"); 
     
    }

    
  }

  /*

  displayFunction () {
    

    console.log("displayLogo", this.displayLogo);
    
    const listener = (data) => {
    console.log(data);
    switch (data.payload.event) {
      
     case 'signIn':
       //   this.signedIn = true;
       //   this.displayLeftSide();
       location.reload();
       this.signIn();
          console.log("displayLogo changed", this.displayLogo);

          break;
          
      case 'signUp':
       //   this.signedIn = true;
       //   this.displayLeftSide();
          console.log("displayLogo changed", this.displayLogo);
          break;
      case 'signOut':
       //   this.signedIn = false;
       //   this.displayLeftSide();
          console.log("displayLogo changed", this.displayLogo);
          break;
          
    } 
       
  }
  Hub.listen('auth', listener);

  
}

  displayLeftSide () {
    
    if (this.signedIn == false){
      this.displayLogo = true;
    
    } 
    if (this.signedIn == true){
      this.displayLogo = false;
    }
    
  }

  */


}
 
