import { Component } from '@angular/core';
import Amplify, {Auth} from 'aws-amplify'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';

//import {HomeScreenComponent} from 'src/app/components/home-screen/home-screen.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acornSQURL';
  constructor(private matDialog: MatDialog) {}
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")}); //instead of console log , refresh page
  }
}
