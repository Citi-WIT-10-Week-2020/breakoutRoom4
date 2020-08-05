import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/shared/file.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-playlist-video',
  templateUrl: './playlist-video.component.html',
  styleUrls: ['./playlist-video.component.scss']
})
export class PlaylistVideoComponent implements OnInit {

<<<<<<< Updated upstream
  @Input() fileDescription: string;
  @Input() fileName: string;
  @Input() fileType: string;

  constructor() { }
=======
  @Input() videoId: String;
  @Input() videoName: String;
  videosrc;
  constructor(private fileservice:FileService,private http:HttpClient) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.getVideoSource();
  }
  getVideoSource(){
    console.log(this.videoId);
    let video = this.fileservice.getVideo(this.videoId);
    video.then((url)=>{
      //this.videosrc = url;
      console.log("VIDEOSRC",url);
      //const vid = URL.createObjectURL(url);
      //console.log("URL",vid);
    })
    //console.log("VIDEOOO", video.);
    //console.log("OUTSIDE VIDEO",video);
    /*video.then((evt)=>{
      console.log("OUTSIDE BIDEO",evt);
      this.http.get(evt.toString(),{
        responseType:'blob'
      }).subscribe((blob)=>{
        const objectUrl = URL.createObjectURL(blob);
        console.log("URL",objectUrl)
        
      })
    })*/
  }
}
