import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { UserinfoService } from 'src/app/shared/userinfo.service';
import { Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { IAccount } from 'src/app/shared/account';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TouchSequence } from 'selenium-webdriver';
import { async } from 'q';
 
@Component({
 selector: 'app-account-dialog',
 templateUrl: './account-dialog.component.html',
 styleUrls: ['./account-dialog.component.scss'],
 providers:[UserinfoService],
})
 
export class AccountDialogComponent implements OnInit {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() universityName: string;
  @Input() id: string
 
 email;
 
 accountForm: FormGroup;
 accountObject: IAccount;
 
 constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AccountDialogComponent>, private apiservice: APIService, private userinfo: UserinfoService) { }
 
  ngOnInit() {
 
   this.accountObject = {
     firstName: this.firstname,
     lastName: this.lastname,
     univName: this.universityName,
     id: this.id
   }
 
   this.accountForm = new FormGroup({
     firstName: new FormControl(''),
     lastName: new FormControl(''),
     universityName: new FormControl('')
   })
 }
 
 close(): void {
   this.dialogRef.close();
 }
 
 onSubmit(): void {

  if(this.accountForm.get('firstName').value != ''){
    this.firstname = this.accountForm.get('firstName').value;
  }

  if(this.accountForm.get('lastName').value != ''){
    this.lastname = this.accountForm.get('lastName').value;
  }

  if(this.accountForm.get('universityName').value != ''){
    this.universityName = this.accountForm.get('universityName').value;
  }

   console.log("first name", this.firstname);
   console.log("last name", this.lastname);
   console.log("univName", this.universityName);
 
   this.updateAccount();
   this.dialogRef.close();
 
 }
 
  async updateAccount() {
    const myObserver = {
      next: async x => {
        this.email = x.attributes.email;
         console.log("email", this.email);
        let professor = await this.apiservice.ProfessorByName(this.email);
         console.log("professor", professor);
         this.id = professor.items[0].id;
         console.log("id", this.id);

         if(this.accountForm.get('firstName').value != ''){
          this.apiservice.UpdateProfessor(
            {id:this.id,
             firstName:this.accountForm.get('firstName').value,
         });
        }

        if(this.accountForm.get('lastName').value != ''){
          this.apiservice.UpdateProfessor(
            {id:this.id,
             lastName:this.accountForm.get('lastName').value,
         });
        }

         if(this.accountForm.get('universityName').value != ''){
          this.apiservice.UpdateProfessor(
            {id:this.id,
             universityName:this.accountForm.get('universityName').value,
         });
        }

       
/*
      //update univName only if there is something
        this.apiservice.UpdateProfessor(
          {id:this.id,
    
         //  universityName:this.accountForm.get('universityName').value,
           firstName: this.accountForm.get('firstName').value,
           lastName: this.accountForm.get('lastName').value}).
          
           then((evt)=> {
             console.log("first name", evt.firstName);
             console.log("last name", evt.lastName);
             
        }).catch (
          (evt)=>{
            console.log("error", evt);
          }
        )
        */
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),

    };

    
 
   this.userinfo.getUserInfo().subscribe(myObserver);
 
    
  }
 }
