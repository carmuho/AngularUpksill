import { Injectable } from '@angular/core';
import { IPost } from "./IPost";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IComment } from './IComment';

@Injectable({
    providedIn: 'root'
})

export class PostService{
  private postUrl = 'api/post/post.json';
  private postlist:IPost[]=null;
  
  constructor(private http: HttpClient){}
    
    getPost(): Observable<IPost[]>{
      if(this.postlist)
          return of(this.postlist);
        return this.http.get<IPost[]>(this.postUrl).pipe(
          tap(data => {
            console.log('All: ' + JSON.stringify(data))
            this.postlist = data;
          }),
          catchError(this.handleError)
        );
    }

    getPostById(postId: number): Observable<IPost>{
        return of(this.postlist.find((post: IPost) =>
        post.postId == postId));

    }

    postAddComment(postId: number, comment: IComment): void{
      const index = this.postlist.findIndex((post: IPost) =>  post.postId == postId);
      if(index !== -1)
        this.postlist[index].comments.push(comment);
    }

    postAddPost(post: IPost): void{
        this.postlist.push(post);
    }

    private handleError(err: HttpErrorResponse){
      let errorMessage = '';
      if (err.error instanceof ErrorEvent){
        errorMessage = `An error occured: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);

    }


}