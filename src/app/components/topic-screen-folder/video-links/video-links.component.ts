import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-links',
  templateUrl: './video-links.component.html',
  styleUrls: ['./video-links.component.scss']
})
export class VideoLinksComponent implements OnInit {

  @Input() videourl: String;
  @Input() linkName: String;

  constructor() { }

  ngOnInit(): void {
  }

}
