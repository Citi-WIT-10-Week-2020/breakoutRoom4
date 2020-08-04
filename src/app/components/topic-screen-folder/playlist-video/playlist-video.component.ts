import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-video',
  templateUrl: './playlist-video.component.html',
  styleUrls: ['./playlist-video.component.scss']
})
export class PlaylistVideoComponent implements OnInit {

  @Input() fileDescription: string;
  @Input() fileName: string;
  @Input() fileType: string;

  constructor() { }

  ngOnInit(): void {
  }

}
