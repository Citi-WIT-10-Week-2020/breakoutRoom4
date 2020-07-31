import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { Auth } from 'aws-amplify';
import { ResourceLoader, ConditionalExpr } from '@angular/compiler';
import { UserinfoService } from 'src/app/shared/userinfo.service';
import { FormBuilder } from '@angular/forms';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { IAccount } from 'src/app/shared/account';
import { Router } from '@angular/router';
import { NavBarComponent } from 'src/app/components/Navigation/nav-bar/nav-bar.component';
export type EditorType = 'name' | 'profile';
 
@Component({
 selector: 'app-account-settings',
 templateUrl: './account-settings.component.html',
 styleUrls: ['./account-settings.component.scss'],
 providers:[UserinfoService],
})
 
export class AccountSettingsComponent implements OnInit {

 firstName: any;
 lastName: any;
 user: any;
 studentProf: any;
 email: any;
 univName: string;
 phone: string;
 last4: string;
 refresh: Boolean;
 
  constructor(private router: Router, private userinfo: UserinfoService, private apiservice: APIService,private matDialog: MatDialog) {
  
 }
 
 ngOnInit(): void {
   this.refresh = false;
   
   this.getInfo();
 
   this.subscribeToUpdateProf();

 //  this.refreshNavBar();
 }
 
   getInfo() {
     console.log("Getting User");
     const myObserver = {
       next: x => {
       console.log('User: ' , x);
       this.firstName = x.attributes.given_name;
       this.lastName = x.attributes.family_name;
       this.studentProf = x.attributes.name;
       this.email = x.username;
       this.phone = x.attributes.phone_number;
       this.last4 = this.phone.substring(8, 12);


       //to get univName
       this.apiservice.ProfessorByName(this.email).then((evt) => {
          this.univName = evt.items[0].universityName;
       });
 
      
      
     },
     error: err => console.error('Observer got an error: ' + err),
     complete: () => console.log('Observer got a complete notification'),
   };
     this.userinfo.getUserInfo().subscribe(myObserver);
 
 
   }
 
 
   openAccountDialog() {
     console.log("account opened");
     const dialogConfig = new MatDialogConfig();
     let dialogRef = this.matDialog.open(AccountDialogComponent, dialogConfig);
     let instance =  dialogRef.componentInstance;
   //  instance.professorName = this.user.username;
    
     dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   } //instead of console log , refresh page
 
 
   //shows update values and updates backend
   subscribeToUpdateProf() {
     this.apiservice.OnUpdateProfessorListener.subscribe((evt)=> {
       const data = (evt as any).value.data.onUpdateProfessor;
       console.log("new data", data);
       //assign values to local variables for display
        //fix user firstname last name
    //   this.user = data.firstName + " " + data.lastName;

      
        this.univName = data.universityName;

       //refresh works
      if (data.firstName != '') {
          this.firstName = data.firstName;
          Auth.currentAuthenticatedUser().then((evt)=> {
              Auth.updateUserAttributes(evt, {given_name: data.firstName})});
      //  this.refreshNavBar();
       //   let refresh = new NavBarComponent(this.apiservice, this.userinfo);
       //   refresh.displayUserName();  
      }

      if (data.lastName != '') {
          this.lastName = data.lastName;
          Auth.currentAuthenticatedUser().then((evt)=> {
              Auth.updateUserAttributes(evt, {family_name: data.lastName})});
       //   this.refreshNavBar();
       //   let refresh = new NavBarComponent(this.apiservice, this.userinfo);
       //   refresh.displayUserName();
     }
      
     })
     .next (() => {
       console.log("in second .then");
      let refreshNav = new NavBarComponent(this.apiservice, this.userinfo);
      refreshNav.displayUserName();
     }); 
   
    return true;
    
   }
 

   async refreshNavBar(){
    console.log("in refresh nav bar"); 
    let refresh = await this.subscribeToUpdateProf();
    if(refresh == true){
      let refreshNav = new NavBarComponent(this.apiservice, this.userinfo);
      refreshNav.displayUserName();
    }
   }
 
}
