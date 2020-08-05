import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/shared/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  @Input() fileName: string;
  @Input() fileType: string;
  @Input() fileId:string;
  @Input() fileDescription:string;

  @Input() isProfessor : boolean;

  constructor(private fileservice:FileService) { }

  ngOnInit(): void { 
    console.log("FILE TYPE AND NAME ", this.fileType, " ", this.fileName);
  }
  onDownload(){
    console.log("Downloading");
    this.fileservice.downloadFile(this.fileId);
  }

  onUpdate(){
    console.log("Updating");
  }
  onDelete(){
    console.log("Deleting");
    this.fileservice.deleteFile(this.fileId);
  }
}
