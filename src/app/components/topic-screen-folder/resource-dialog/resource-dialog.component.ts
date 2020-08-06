import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { FileService } from 'src/app/shared/file.service';
import { IFile } from 'src/app/shared/file';
import { FormBuilder, Validators } from '@angular/forms';
import { IResourceGroup } from 'src/app/shared/resourceGroup';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from 'src/app/API.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-resource-dialog',
  templateUrl: './resource-dialog.component.html',
  styleUrls: ['./resource-dialog.component.scss'],
  providers: [FileService]
})
export class ResourceDialogComponent implements OnInit {
  
  @Input() resourceGroups : Array<any>;
  @Input() courseName: string;
  @Input() topicName :string;

  fileTypeSelected : string;
  resourceGroupSelected : string;
  files: Array<any>;
  private filename;
  private fileType;
  _undefined: undefined

  public getFileGroup = this.fb.group({
    file:[null,Validators.required]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,public dialogRef: MatDialogRef<ResourceDialogComponent>, private fileservice:FileService, private apiservice: APIService) {}

  fileForm : FormGroup;
  videoForm : FormGroup;
  fileObject: IFile;
  resourceGroupObject: IResourceGroup;
  course: string; //PASSED IN
  topic: string; //PASSED IN
  fileDescription: string; //get from userInput, if URL = url, if file this = ""
  groupName: string; //get from userInput
  tabLabel : boolean = true;
  videosrc : string;
  videoName : string;

  ngOnInit(): void {
    this.subscibeToResourceGroupEvents();

    this.fileForm = new FormGroup({
      fileName: new FormControl(''),
      groupName: new FormControl(''),
      fileDescription: new FormControl(''), //url
      fileType: new FormControl(''),
      id: new FormControl(uuidv4()) 
    });
    
      this.videoForm = new FormGroup({
        videoName : new FormControl(''),
        groupName: new FormControl('Playlist'),
        fileDescription: new FormControl('')
        
      })
  }



  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    if(tabChangeEvent.index == 1){
      this.fileForm.get('groupName').setValue("Playlist");
      this.groupName = "Playlist";
      this.tabLabel = false;
    }
    console.log("THIS GROUPNAME",this.groupName);
    console.log("FORM CONTROL GROUPNAME",this.fileForm.get('groupName').value);

  }

subscibeToResourceGroupEvents(){
  //creations
  this.apiservice.OnCreateResourceGroupListener.subscribe((evt)=>{
    
    const data = (evt as any).value.data.onCreateResourceGroup;
    this.resourceGroups = [...this.resourceGroups,data];
  });
  //deletions
}

cancel(){
  this.dialogRef.close();
  console.log(this.resourceGroups);
}

 onFileChange(event){
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    this.filename = event.target.files[0].name;
    this.fileType = event.target.files[0].type;
    console.log(this.filename,this.fileType);
    const [file1] = event.target.files;
    console.log("ORIGi", file1);
    this.getFileGroup.patchValue({
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

onResourceSubmit(){
  let file = this.getFileGroup.get('file').value; //get the file
  console.log("INONSUBMIT",file);
 
 
    //here we KNOW it is a link
    this.fileDescription = this.fileForm.get('fileDescription').value;
  
 
  //this.filename = this.fileForm.get('fileName').value;
  if(this.fileForm.get('fileType').value == 'link'){
    this.fileType = this.fileForm.get('fileType').value;
  }

  //will there be a disrepancy here?
  console.log("FILETYPE",this.fileType);
  console.log("FILENAME",this.filename);
  console.log("FILEDESCRIPTION",  this.fileDescription);
  this.groupName = this.fileForm.get('groupName').value;
  console.log("GROUPNAME",this.groupName);
 
  console.log("RESOURCENAME",this.fileForm.get("fileName").value);
  this.fileservice.createFile(this.filename, this.fileType, file, this.courseName, this.topicName, this.fileDescription, this.groupName,this.fileForm.get('fileName').value); //PASS IN MORE PARAMS

  if (this.tabLabel == false) {
    this.videosrc = this.fileForm.get('fileDescription').value;
    this.videoName = this.fileForm.get('fileName').value;
  }

}

addResource(newGroup : boolean){
 
  /*console.log("RESOURCE GROUP OBJECT ", this.fileDescription);
  console.log(this.resourceGroupObject.id);
  console.log(this.resourceGroupObject.course);
  console.log(this.resourceGroupObject.topic);
  console.log(this.resourceGroupObject.groupName);*/

  

  if(newGroup){
    console.log("CREATING NEW GROUP");
    this.resourceGroupObject ={
    id : this.fileForm.get('id').value, 
    course : this.courseName,
    topic : this.topicName,
    groupName : this.fileForm.get('groupName').value
    }
    
    this.fileservice.createResourceGroup(this.resourceGroupObject); 
    this.onResourceSubmit();
  }
  else{
    this.onResourceSubmit();
  }

  this.dialogRef.close();

}


}
