
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Post } from "../serviceclass/Post";
@Injectable()
export class MyApiService{

    //httpClient =new HttpClient();
    
    constructor(private httpClient:HttpClient){

    }
    getAllComments():Observable<any>{
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }

    getCommentsByUserId(id):Observable<any>{
        let param1=new HttpParams().set("userId",id);
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts",{params:param1});
    }


    postComment(post:Post):Observable<any>{
        
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts",post);
        
    }
}