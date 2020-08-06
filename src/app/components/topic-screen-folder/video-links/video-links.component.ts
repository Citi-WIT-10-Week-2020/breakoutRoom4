import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-links',
  templateUrl: './video-links.component.html',
  styleUrls: ['./video-links.component.scss']
})
export class VideoLinksComponent implements OnInit {

  @Input() videourl: string;
  @Input() videoName: string;
  @Input() type : string;

  constructor() { }

  ngOnInit(): void {

    console.log("LINKS",this.videourl,this.videoName,this.type);
  }

  




}
