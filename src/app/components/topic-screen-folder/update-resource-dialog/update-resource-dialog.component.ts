import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FileService } from 'src/app/shared/file.service';
import { IFile } from 'src/app/shared/file';
import { IResourceGroup } from 'src/app/shared/resourceGroup';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-resource-dialog',
  templateUrl: './update-resource-dialog.component.html',
  styleUrls: ['./update-resource-dialog.component.scss'],
  providers: [FileService]
})
export class UpdateResourceDialogComponent implements OnInit {

  @Input() id: string;
  @Input() rgName: string;
  @Input() course: string;
  @Input() topic: string;
  @Input() files: Array<any>

  resourceGroup: FormGroup;
  resourceGroupObject: IResourceGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateResourceDialogComponent>, private fileservice:FileService) { }

  ngOnInit(): void {

    this.resourceGroupObject = {
      id: this.id,
      course: this.course,
      topic: this.topic,
      groupName: this.rgName,
    }


    this.resourceGroup = new FormGroup({
      groupName: new FormControl(''),
    })
    console.log("OLD INFO", this.resourceGroupObject);
  };

  onSubmit(): void {
    console.log(this.resourceGroup.value);
    console.log("submit works");

    if(this.resourceGroup.get('groupName').value != ''){
      this.resourceGroupObject.groupName = this.resourceGroup.get('groupName').value;
      this.rgName = this.resourceGroup.get('groupName').value;
      console.log("new name");
    }
    else {this.resourceGroupObject.groupName = this.rgName;}

    
    console.log("NEW INFO", this.resourceGroupObject);


    this.updateResource();
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
    console.log("Name:", this.rgName);
  }

  async updateResource(){
    this.fileservice.updateResource(this.resourceGroupObject);
}
}
