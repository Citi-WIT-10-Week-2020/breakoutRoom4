import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-group',
  templateUrl: './resource-group.component.html',
  styleUrls: ['./resource-group.component.scss']
})
export class ResourceGroupComponent implements OnInit {


  @Input() rgName: String;
  @Input() fileName: String;

  constructor() { }

  ngOnInit(): void {
  }

}
