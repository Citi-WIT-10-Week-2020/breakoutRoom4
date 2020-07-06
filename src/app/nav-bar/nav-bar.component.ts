import { Component, OnInit } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent implements OnInit {
  profName:String;
  //javascript promises and async programming

  constructor() { }

  ngOnInit(): void {
   Auth.currentUserInfo().then((evt)=>{
      console.log(evt);
      this.profName = evt.username;
    });
    //console.log(info);
    //this.profName = info.username;
    //console.log(info.username);
  }

   /*async displayName(){
    let info = await Auth.currentUserInfo();
    console.log(info.username);
    //console.log(info);
   

  } */
  
  

}



