import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { title } from 'process';
import { FormBuilder, Validators } from '@angular/forms';
import { FileService } from 'src/app/shared/file.service';



@Component({
  selector: 'app-topic-screen',
  templateUrl: './topic-screen.component.html',
  styleUrls: ['./topic-screen.component.scss'],
  providers:[FileService]
})



export class TopicScreenComponent implements OnInit {

  
  
  
  public formGroup = this.fb.group({
    file:[null,Validators.required]
  });
  private fileName;
  private fileType;
  files: Array<any>;
  constructor(private route:ActivatedRoute,private fb: FormBuilder, private fileservice: FileService) { }

  topicId: String;
  topicName: String;
  courseId: String;
  rgObject: any;

  ngOnInit(): void {


    this.rgObject={
      rgName: "title",
      fileName: "name of file",
    };


    //gets courseID
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
    });
    console.log(this.courseId);

    //gets topicID
    this.route.paramMap.subscribe(params => { 
      this.topicId = params.get('id'); 
      this.topicName = params.get('TopicName'); 
    });

    console.log(this.topicId);
    console.log(this.topicName);

    this.getFiles();

  
  }
  onDownload(){
    console.log("Downloading!");
    //Download the file
    console.log("ID",this.files[0].id);
    this.fileservice.downloadFile(this.files[0].id);
  }
  
  getFiles(){
    const myObserver = {
      next: x => {
        console.log('FILES: ' , x);
        this.files = x.items;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.fileservice.getFiles().subscribe(myObserver);
  }

   onFileChange(event){
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      this.fileType = event.target.files[0].type;
      console.log(this.fileName,this.fileType);
      const [file1] = event.target.files;
      console.log("ORIGi", file1);
      this.formGroup.patchValue({
        file: file1
      });
      /*reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };*/
    }
  }

  onSubmit(){
    //console.log(this.fileName);
    let file = this.formGroup.get('file').value;
    console.log("INONSUBMIT",file);
    //let newFile = file.replace(/^data:image\/[a-z]+;base64,/, "");
    //console.log(newFile);
   this.fileservice.createFile(this.fileName,this.fileType,file);
  }

}

