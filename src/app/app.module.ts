import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { CourseScreenComponent } from './components/course-screen/course-screen.component';
import { TopicScreenComponent } from './components/topic-screen/topic-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CourseComponent } from './components/course/course.component';
import { TopicComponent } from './components/topic/topic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component'
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseScreenComponent,
    TopicScreenComponent,
    HomeScreenComponent,
    CourseComponent,
    TopicComponent,
    DialogBodyComponent,

  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [DialogBodyComponent]

})
export class AppModule { }
