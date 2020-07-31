import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { title } from 'process';
import { APIService } from '../../../API.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FileService } from 'src/app/shared/file.service';
import { FaqDialogComponent } from '../faq-dialog/faq-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import  {ResourceDialogComponent} from '../resource-dialog/resource-dialog.component'
import { IResourceGroup } from 'src/app/shared/resourceGroup';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-topic-screen',
  templateUrl: './topic-screen.component.html',
  styleUrls: ['./topic-screen.component.scss'],
  providers:[FileService]
})
export class TopicScreenComponent implements OnInit {
  resourceGroups : Array<any>;  //DINA, THE RESOURCE GROUPS ARE IN HERE :)
  topic: any;
  topicId: string;
  topicName: string;
  courseId: string;
  courseName: string;
  groupName: string;
  fileDescription: string;
  isProfessor: boolean = false;


  constructor(private route:ActivatedRoute,private fb: FormBuilder,private matDialog: MatDialog, private fileservice: FileService, private apiservice: APIService) { }
  course: string;
  playlist: any;
  faq : any;
  ngOnInit(): void {
    //gets courseID
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });
    console.log(this.courseId);
    //gets the course name using courseId
    this.apiservice.GetCourse(this.courseId.toString()).then((evt)=>{
      console.log("course", evt);
      this.course = evt.courseName;
      console.log('this.course', this.course);
    }).catch((err)=>{
      console.log(err);
    });
    //gets topicID
    this.route.paramMap.subscribe(params => { 
      this.topicId = params.get('id'); 
      this.topicName = params.get('TopicName'); 
    });
    console.log(this.topicId);
    console.log(this.topicName);
    //this.getFiles();
    this.checkResourceGroups();
    this.subscribeToResourceGroupEvents();
    this.subscibeToFileEvents();
  }
  subscibeToFileEvents(){
     //creations
     this.apiservice.OnCreateFileListener.subscribe((evt)=>{
      //console.log("FILE CREATED",evt);
      const data = (evt as any).value.data.onCreateFile;
      console.log(data.resourseGroup)
      if(data.resourseGroup == "Playlist"){
        this.playlist.files.items = [...this.playlist.files.items,data];
      }
      else if(data.resourseGroup == "FAQ"){
        this.faq.files.items = [...this.faq.files.items,data];
      }
    });
    //deletions
    this.apiservice.OnDeleteFileListener.subscribe((evt)=>{
      //console.log("FILE DELETED");
      const data = (evt as any).value.data.onDeleteFile;
      console.log(data);
      //basically, search thru array, find original, remove it
      if(data.resourseGroup == "Playlist"){
        this.playlist.files.items = this.playlist.files.items.filter((video)=>{
          return(video.id != data.id)
        })
      }
      else if(data.resourseGroup == "FAQ"){
        this.faq.files.items = this.faq.files.items.filter((question)=>{
          return(question.id != data.id)
        })
      }
    });
  }
  subscribeToResourceGroupEvents(){
    //creations
    this.apiservice.OnCreateResourceGroupListener.subscribe((evt)=>{
      console.log("RESOURCE GROUP CREATED");
      const data = (evt as any).value.data.onCreateResourceGroup;
      if(this.resourceGroups== undefined){
        this.resourceGroups = [];
      }
      console.log(evt);
      if(data.groupName != "Playlist" && data.groupName != "FAQ"){
        this.resourceGroups = [...this.resourceGroups,data];
      }
    });
    //deletions
    this.apiservice.OnDeleteResourceGroupListener.subscribe((evt)=>{
      console.log("RESOURCE GROUP DELETED");
      const data = (evt as any).value.data.onDeleteResourceGroup;
      console.log(data);
      //basically, search thru array, find original, remove it
      this.resourceGroups = this.resourceGroups.filter((group)=>{
          return (group.id != data.id)
      });
      console.log(this.resourceGroups);
    });
    //updates
    this.apiservice.OnUpdateResourceGroupListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onUpdateResourceGroup;
      console.log("Update", data);
      console.log("An update has occurred!");
      //search thru array, find original, and replace it with the new one
      this.resourceGroups = this.resourceGroups.map((group)=>{
        if(group.id == data.id){
          return data;
        }
        else return group;
      })
    });
  }
   checkResourceGroups(){
    const myObserver = {
      next: x => {
        console.log('THE TOPIC: ' , x);
        this.topic = x.data.getTopic;
        console.log("ACTUAL TOPIC",this.topic.resourceGroups);
        //if resource groups are empty, createresource groups
        if(this.topic.resourceGroups.items.length == 0){
          console.log("creating resourceGroups");
           this.createInitialResourceGroups();
        }
        else{
          //find faq and playlist
          console.log("RESOURCE GROUP ASSIGNMENT");
          this.faq = this.topic.resourceGroups.items.find((item)=>{
            return (item.groupName == "FAQ")
          });
          console.log("FAQ",this.faq);
          this.playlist = this.topic.resourceGroups.items.find((item)=>{
            return (item.groupName == "Playlist")
          });
          console.log("PLAYLIST",this.playlist);
          this.resourceGroups = this.topic.resourceGroups.items.filter((item)=>{
            return(item.groupName != "Playlist" && item.groupName != "FAQ")
          });
          console.log("GROUPS", this.resourceGroups);
        }
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.fileservice.getTopic(this.topicId).subscribe(myObserver);
  }
  async createInitialResourceGroups(){
    let playlist :IResourceGroup = {
      id: uuidv4(),
      course: this.topic.course,
      groupName: "Playlist",
      topic:this.topic.TopicName
    }
    let faq : IResourceGroup = {
      id:uuidv4(),
      course:this.topic.course,
      groupName: "FAQ",
      topic:this.topic.TopicName
    }
    //create Playlist
    this.playlist = await this.fileservice.createResourceGroup(playlist);
    console.log("PLAYLIST",this.playlist);
    //create FAQ
    this.faq = await this.fileservice.createResourceGroup(faq);
    console.log(this.faq,faq);
    //check to see if the resourcegroups are there
   /* this.fileservice.getTopic(this.topicId).subscribe((x)=>{
      console.log(x);
      this.resourceGroups = x.resourceGroups.items;
      console.log("GROUPS", this.resourceGroups);
    })*/
  }
  openResourceDialog()
  {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(ResourceDialogComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
      //instance.professorName = this.user.username;
      instance.resourceGroups = this.resourceGroups;
      instance.courseName = this.course;
      instance.topicName = this.topicName;
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
  }
  openFaqDialog() {
    console.log("dialog opened");
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(FaqDialogComponent, dialogConfig);
    let instance =  dialogRef.componentInstance;
    instance.faqObject = this.faq;
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   } //instead of console log , refresh page
}