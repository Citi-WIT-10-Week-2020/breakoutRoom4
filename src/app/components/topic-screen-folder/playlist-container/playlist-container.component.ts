import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss']
})
export class PlaylistContainerComponent implements OnInit {

  constructor() { }

  playlistObject: Array<any>; 

  ngOnInit(): void {

    this.playlistObject=[
      {
        videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
        videoName: "Name of Video"
      },
    
    {
      videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
      videoName: "Name of Video"
    },
    {
      videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
      videoName: "Name of Video"
    },
    {
      videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
      videoName: "Name of Video"
    },
    {
      videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
      videoName: "Name of Video"
    },
    {
      videosrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4",
      videoName: "Name of Video"
    },
  ]

  }

}
