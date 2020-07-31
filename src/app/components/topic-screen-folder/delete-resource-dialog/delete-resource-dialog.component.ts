import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FileService } from 'src/app/shared/file.service';

@Component({
  selector: 'app-delete-resource-dialog',
  templateUrl: './delete-resource-dialog.component.html',
  styleUrls: ['./delete-resource-dialog.component.scss'],
  providers:[FileService]
})
export class DeleteResourceDialogComponent implements OnInit {

  @Input() rgName: String;
  @Input() id: string;

  constructor(public dialogRef: MatDialogRef<DeleteResourceDialogComponent>, private fileservice:FileService) { }

  

  ngOnInit(): void {
  }

  deleteResource() {
    console.log(this.rgName);
    this.fileservice.deleteResource(this.id);
    this.dialogRef.close();
  }

  cancel(): void{
    this.dialogRef.close();
  }
}
