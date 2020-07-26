import { Component, OnInit, Input } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-resource-group',
  templateUrl: './resource-group.component.html',
  styleUrls: ['./resource-group.component.scss']
})
export class ResourceGroupComponent implements OnInit {

  @Input() files: Array<any>
  @Input() rgName: String;
  

  constructor(private apiservice: APIService) { }

  ngOnInit(): void {
    console.log("IN RESOURCE GROUP",this.files);

    this.subscribeToFileEvents();
  }


  subscribeToFileEvents(){
    //creations
    this.apiservice.OnCreateFileListener.subscribe((evt)=>{
      console.log("FILE CREATED",evt);
      const data = (evt as any).value.data.onCreateFile;
      console.log(data.resourseGroup, this.rgName)
      if(data.resourseGroup == this.rgName){
        console.log("ADDING");
        this.files = [...this.files,data];
      }
      
    });

    //deletions
    this.apiservice.OnDeleteFileListener.subscribe((evt)=>{

      console.log("FILE DELETED");
      const data = (evt as any).value.data.onDeleteFile;
      console.log(data);
      //basically, search thru array, find original, remove it
      if(data.resourseGroup == this.rgName){
      this.files = this.files.filter((file)=>{
          return (file.id != data.id)
      });
      }
    });

    //updates
    this.apiservice.OnUpdateFileListener.subscribe((evt)=>{
      const data = (evt as any).value.data.onUpdateFile;
      console.log("Update", data);
      
      console.log("An update has occurred!");
      //search thru array, find original, and replace it with the new one
      if(data.resourseGroup == this.rgName){
      this.files = this.files.map((file)=>{
        if(file.id == data.id){
          return data;
        }
        else return file;
      })
    }
    });
  }
}
