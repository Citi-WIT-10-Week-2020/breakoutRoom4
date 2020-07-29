import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import { FileService } from 'src/app/shared/file.service';
import { IFile } from 'src/app/shared/file';
import { FormBuilder, Validators } from '@angular/forms';
import { IResourceGroup } from 'src/app/shared/resourceGroup';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from 'src/app/API.service';

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
  fileDescription: string; //get from userInput <if URL = url, if file this = ""
  groupName: string; //get from userInput


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
  };


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
  let file = this.getFileGroup.get('file').value;
  console.log("INONSUBMIT",file);
  //let newFile = file.replace(/^data:image\/[a-z]+;base64,/, "");
  if(this.fileDescription == undefined){
    this.fileDescription = "empty";
  }  
  //if adding a new resource, do this
  
  this.fileDescription = this.fileForm.get('fileDescription').value;
  this.groupName = this.fileForm.get('groupName').value;

  console.log(this.filename, this.fileType," DESC ", this.fileDescription, this.groupName);
  console.log("RESOURCENAME",this.fileForm.get("fileName").value);
  this.fileservice.createFile(this.filename, this.fileType, file, this.courseName, this.topicName, this.fileDescription, this.groupName,this.fileForm.get('fileName').value); //PASS IN MORE PARAMS
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
