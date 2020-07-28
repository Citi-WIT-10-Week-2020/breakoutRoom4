import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { Auth } from 'aws-amplify';
import { ResourceLoader } from '@angular/compiler';
import { UserinfoService } from 'src/app/shared/userinfo.service';
import { FormBuilder } from '@angular/forms';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { IAccount } from 'src/app/shared/account';
export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  providers:[UserinfoService],
})

export class AccountSettingsComponent implements OnInit {
  user: any;
  studentProf: any;
  email: any;
  univName: string;
  phone: string;
  last4: string;
  

  
  constructor(private userinfo: UserinfoService, private apiservice: APIService,private matDialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.getInfo();


    this.subscribeToUpdateProf();
  //  this.onSubmit();
  } 

    getInfo() {
      console.log("Getting User");
      const myObserver = {
        next: x => {
        console.log('User: ' , x);
        this.user = x.attributes.given_name + " " + x.attributes.family_name;
        this.studentProf = x.attributes.name;
        this.email = x.username;
        this.phone = x.attributes.phone_number;
        this.last4 = this.phone.substring(8, 12);
        
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


    subscribeToUpdateProf() {
      this.apiservice.OnUpdateProfessorListener.subscribe((evt)=> {
        const data = (evt as any).value.data.onUpdateProfessor;
        console.log("subscribe update", data);
        //assign values to local variables for display
        //user = first + last
      });
    }


}

  
/*

  getInfo() {
     const myObserver = {
      next: x => {
      this.id = x.id;
      console.log("id", x.id);
     //this.email = x.username;

      this.apiservice.ProfessorByName(this.email).then((evt) => {

        this.apiservice.UpdateProfessor({id:this.id,professorName:this.accountForm.get('accountName').value, universityName:this.accountForm.get('universityName').value}).then((evt)=> {
        // evt.professorName = this.accountForm.get('accountName').value;
        // evt.universityName = this.accountForm.get('universityName').value;
         console.log("name", evt.professorName);
         console.log("univName", evt.universityName);
         console.log("updated");
        });
    });

      
      this.apiservice.UpdateProfessor({id:this.id,professorName:this.accountForm.get('accountName').value, universityName:this.accountForm.get('universityName').value}).then((evt)=> {
        // evt.professorName = this.accountForm.get('accountName').value;
        // evt.universityName = this.accountForm.get('universityName').value;
         console.log("name", evt.professorName);
         console.log("univName", evt.universityName);
         console.log("updated");
       });

       
    },
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  this.userinfo.getUserInfo().subscribe(myObserver);
  
}
*/

