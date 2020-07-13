import { Component } from '@angular/core';
import Amplify, {Auth} from 'aws-amplify'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';

//import {HomeScreenComponent} from 'src/app/components/home-screen/home-screen.component'
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { Hub, Logger} from 'aws-amplify';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acornSQURL';
  formFields: FormFieldTypes;

  constructor() {
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
        //for later: check value of this field
      },
    ];
  } 
  
  //Attempt to make icon registry work
  /*constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        "logo_img",
        this.domSanitizer.bypassSecurityTrustResourceUrl('src/assests/pencil-outline.svg')
      )
    }
 */
}
