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
        const getTopic = `query getTopic($id: ID!){
            getTopic(id:$id){
              professor
              TopicName
              course
              TopicDescription
              resourceGroups{
                items{
                  id
                  course
                  topic
                  groupName
                  files{
                    items{
                      id
                      filename
                      filetype
                      fileDescription
                    }
                  }
                }
              }
            }
          }`;
          return from(API.graphql(graphqlOperation(getTopic,{id: topicId})));
        //return from(this.apiservice.GetTopic(topicId));
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
    async createFile(fileName,fileType,file, course, topic, fileDescription, resourceGroup,resourceName:string){
        let id = uuidv4()
        const key = `${id}${fileName}`;
        console.log(key);
        console.log(config);
        this.fileInput={
            id:key,
            course:course,
            topic:topic,
            filename: resourceName,
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
            if(file){
                
                await Storage.put(key,file,{
                contentType:fileType
                });
            }
            
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
    async deleteFile(key:string){
        //delete from s3
        let result = await Storage.remove(key);
        console.log(result);
        //delete from dynamodb

        await this.apiservice.DeleteFile({id:key});
    }
    
}