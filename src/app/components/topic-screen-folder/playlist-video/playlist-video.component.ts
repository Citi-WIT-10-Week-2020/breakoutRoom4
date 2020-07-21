import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-video',
  templateUrl: './playlist-video.component.html',
  styleUrls: ['./playlist-video.component.scss']
})
export class PlaylistVideoComponent implements OnInit {

  @Input() videosrc: String;
  @Input() videoName: String;

  constructor() { }

  ngOnInit(): void {
  }

}
