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

  
  
  
  public formGroup = this.fb.group({
    file:[null,Validators.required]
  });
  private fileName;
  private fileType;
  files: Array<any>;
  resourceGroups : Array<any>;  //DINA, THE RESOURCE GROUPS ARE IN HERE :)
  topic: any;
 

  topicId: string;
  topicName: string;
  courseId: string;
  courseName: string;
  groupName: string;
  fileDescription: string;

  constructor(private route:ActivatedRoute,private fb: FormBuilder,private matDialog: MatDialog, private fileservice: FileService, private apiservice: APIService) { }

  course: string;
  rgObject: Array<any>;
  playlistObject: Array<any>; 
  faqObject: Array<any>;

  ngOnInit(): void {

   
    this.rgObject=[
      {
        id: this.topicId,
        course: this.courseName,
        topic: this.topicName,
        groupName: this.groupName
        // rgName: "title",
        // fileName: "name of file",
      }
  ];

    this.playlistObject=[
      {
        videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
        videoName: "Name of Video"
      }
    ];

    this.faqObject=[
      {
        question: "question1",
        answer: "answer1",
      }
    ];


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

    this.getFiles();
    this.checkResourceGroups();
  
  }
  subscribeToResourceGroupEvents(){

    //creations
    this.apiservice.OnCreateResourceGroupListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onCreateResourceGroup;
      this.resourceGroups = [...this.resourceGroups,data];
    });

    //deletions
    
  }

  subscribeToFileEvents(){

  }
   checkResourceGroups(){
    const myObserver = {
      next: x => {
        console.log('THE TOPIC: ' , x);
        this.topic = x;
        //if resource groups are empty, createresource groups
        if(x.resourceGroups.items.length == 0){
          console.log("creating resourceGroups");
           this.createInitialResourceGroups();
        }
        else{
          this.resourceGroups = x.resourceGroups.items;
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
    await this.fileservice.createResourceGroup(playlist);
    //create FAQ
    await this.fileservice.createResourceGroup(faq);
    //check to see if the resourcegroups are there
    this.fileservice.getTopic(this.topicId).subscribe((x)=>{
      console.log(x);
      this.resourceGroups = x.resourceGroups.items;
      console.log("GROUPS", this.resourceGroups);
    })
  }
  onDownload(){
    console.log("Downloading!");
    //Download the file
    console.log("ID",this.files[0].id);
    this.fileservice.downloadFile(this.files[0].id);
  }
  
  getFiles(){
    const myObserver = {
      next: x => {
        console.log('FILES: ' , x);
        this.files = x.items;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.fileservice.getFiles().subscribe(myObserver);
  }

   onFileChange(event){
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      this.fileType = event.target.files[0].type;
      console.log(this.fileName,this.fileType);
      const [file1] = event.target.files;
      console.log("ORIGi", file1);
      this.formGroup.patchValue({
        file: file1
      });
      /*reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };*/
    }
  }

  onSubmit(){
    //console.log(this.fileName);
    let file = this.formGroup.get('file').value;
    console.log("INONSUBMIT",file);
    //let newFile = file.replace(/^data:image\/[a-z]+;base64,/, "");
    //console.log(newFile);
   this.fileservice.createFile(this.fileName,this.fileType,file, this.courseName, this.topicName, this.fileDescription, this.groupName);
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
    
      
    dialogRef.afterClosed().subscribe(()=>{console.log("dialog has been closed")});
   } //instead of console log , refresh page

}

