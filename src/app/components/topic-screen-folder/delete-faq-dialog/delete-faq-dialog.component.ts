import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Input } from '@angular/core';

@Component({
  selector: 'app-delete-faq-dialog',
  templateUrl: './delete-faq-dialog.component.html',
  styleUrls: ['./delete-faq-dialog.component.scss']
})
export class DeleteFaqDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteFaqDialogComponent>) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.dialogRef.close();
  }

  deleteFaq() {
    
  }

}

