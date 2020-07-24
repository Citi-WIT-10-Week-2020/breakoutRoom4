import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { NavBarComponent } from './components/Navigation/nav-bar/nav-bar.component';

import { CourseScreenComponent } from './components/course-screen/course-screen.component';
import { TopicScreenComponent } from './components/topic-screen-folder/topic-screen/topic-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { HelpScreenComponent } from './components/help-screen/help-screen.component';
import { CourseComponent } from './components/course/course.component';
import { TopicComponent } from './components/topic/topic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/Navigation/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { ResourceGroupComponent } from './components/topic-screen-folder/resource-group/resource-group.component';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PlaylistVideoComponent } from './components/topic-screen-folder/playlist-video/playlist-video.component';
import { FaqComponent } from './components/topic-screen-folder/faq/faq.component';




import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import {TopicDialogComponent} from './components/topic-dialog/topic-dialog.component';

import { CopyDialogComponent } from './components/copy-dialog/copy-dialog.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';

import { UpdateTopicDialogComponent } from './components/update-topic-dialog/update-topic-dialog.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DeleteTopicDialogComponent } from './components/delete-topic-dialog/delete-topic-dialog.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ResourceDialogComponent } from './components/topic-screen-folder/resource-dialog/resource-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseScreenComponent,
    TopicScreenComponent,
    HomeScreenComponent,
    CourseComponent,
    TopicComponent,
    FooterComponent,
    ResourceGroupComponent,
    DialogBodyComponent,
    PlaylistVideoComponent,
    FaqComponent,
    UpdateDialogComponent,
    TopicDialogComponent,

    HelpScreenComponent,


    CopyDialogComponent,

    AboutScreenComponent,

    UpdateTopicDialogComponent,

    DeleteDialogComponent,

    DeleteTopicDialogComponent,

    ResourceDialogComponent,

    
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    MatExpansionModule,

    ClipboardModule,
    MatSnackBarModule,

    MatFormFieldModule,

    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent, UpdateDialogComponent],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class AppModule { }
