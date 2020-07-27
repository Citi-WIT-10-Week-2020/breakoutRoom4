import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-update-faq-dialog',
  templateUrl: './update-faq-dialog.component.html',
  styleUrls: ['./update-faq-dialog.component.scss']
})
export class UpdateFaqDialogComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string;

  faq: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.faq = new FormGroup({
      question: new FormControl(''),
      answer: new FormControl(''),
    })
  };

  onSubmit(): void {

  }

  cancel() {

  }

}


