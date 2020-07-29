import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Input } from '@angular/core';
import { FileService } from 'src/app/shared/file.service';
import { IFile } from 'src/app/shared/file';

@Component({
  selector: 'app-delete-faq-dialog',
  templateUrl: './delete-faq-dialog.component.html',
  styleUrls: ['./delete-faq-dialog.component.scss'],
  providers:[FileService]
})
export class DeleteFaqDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteFaqDialogComponent>, private fileservice:FileService) { }

  @Input() id: string;

  ngOnInit(): void {
  }


  deleteFaq() {
    console.log(this.id);
    this.fileservice.deleteFile(this.id);
    this.dialogRef.close();
  }

  cancel(): void{
    this.dialogRef.close();
  }

}

