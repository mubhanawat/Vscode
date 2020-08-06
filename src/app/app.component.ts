import { Component } from '@angular/core';
import { MyApiService } from "./services/myapi.service";
import { Post } from './serviceclass/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

    id;
    comm;
    fetch()
    {
      this.myApi.getCommentsByUserId(this.id).subscribe(
        usercomments=>{
          this.comm=usercomments;
        }
      );
    }
    commentsArr:Comment[];
  constructor(private myApi:MyApiService)
  {

  }
  title = 'ServiceDemoApp';
  returnPost:Post;
   ngOnInit(){
     this.myApi.getCommentsByUserId(this.id).subscribe(
      userComments=>{
        console.log(userComments);
      }
    );

    this.myApi.getAllComments().subscribe(
     comments=>{
         this.commentsArr=comments;
      }
     );

     var post=new Post();
     post.body="This is post body";
     post.title="This is post title";
     post.userId=1;

     this.myApi.postComment(post).subscribe(
       data=>{
         this.returnPost=data;
         console.log(this.returnPost);
       }
     );
   }  
}
