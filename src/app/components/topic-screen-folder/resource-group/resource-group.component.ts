import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-group',
  templateUrl: './resource-group.component.html',
  styleUrls: ['./resource-group.component.scss']
})
export class ResourceGroupComponent implements OnInit {

  @Input() resourceGroups: Array<any>
  @Input() rgName: String;
  @Input() fileName: String;
  @Input() files: Array <any>;
  constructor() { }

  ngOnInit(): void {
    console.log("RESOURCE GROUPS ARRAY", this.resourceGroups);
  }

}
