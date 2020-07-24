import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of ,from} from 'rxjs';
import { ICourse } from './course';
import { Storage, API, graphqlOperation } from 'aws-amplify'
import {IFile} from '../shared/file'
//functions to create, get, update, and delete courses
import config from '../../aws-exports'
import { HttpClient } from '@angular/common/http';
import { IResourceGroup } from './resourceGroup';
@Injectable(
   
)

export class FileService{
    
    fileInput: IFile;
    constructor(private apiservice: APIService,private http: HttpClient){}
    getTopic(topicId:string){
        return from(this.apiservice.GetTopic(topicId));
    }
    //function to get Files from database
    getFiles(): Observable<any>{
        //change to getResourceGroup
        return from(this.apiservice.ListFiles());
    }
    //function to download a file
    async downloadFile(key){
        //const reader = new FileReader();
        //storage.get(key)
        let imageData = await Storage.get(key);
        console.log("IMAGEDATA",imageData);
        //decode file
        this.http.get(imageData.toString(),{
            responseType:'blob'
        }).subscribe(blob=>{
            const a = document.createElement('a');
           // let decoded = atob(blob.arrayBuffer());
           console.log("BLOB",blob);
            const objectUrl = URL.createObjectURL(blob)
            a.href = objectUrl
            a.download = key;
            a.click();
            URL.revokeObjectURL(objectUrl);
        })
        //open window and prompt save
       
    }
    async createResourceGroup(group: IResourceGroup) : Promise<any>{
        return await this.apiservice.CreateResourceGroup(group);
      }
    
    //create / upload file
    async createFile(fileName,fileType,file, course, topic, fileDescription, resourceGroup){
        let id = uuidv4()
        const key = `${id}${fileName}`;
        console.log(key);
        console.log(config);
        this.fileInput={
            id:key,
            course:course,
            topic:topic,
            filename: fileName,
            filetype: fileType,
            fileDescription:fileDescription,
            resourseGroup: resourceGroup,
            file:{
                key,
                bucket: config.aws_user_files_s3_bucket,
                region:config.aws_user_files_s3_bucket_region
            }
        }
        try{
            await Storage.put(key,file,{
            contentType:fileType
            });
            let returned = await this.apiservice.CreateFile(this.fileInput);
            console.log(returned);
        }
        catch(err){
            console.log("err",err);
        }
        
    }

    //update files
    updateFile(){

    }
    //delete files
    deleteFile(){

    }
    
}