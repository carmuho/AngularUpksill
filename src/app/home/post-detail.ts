import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IComment } from './IComment';
import { IPost } from './IPost';
import { PostService } from './post.service';

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.html'
})
   
export class PostDetailComponent implements OnInit{
    pageTitle: string = 'post Detail';
    post: IPost;

    commentario: string;
    constructor (private postService: PostService, private route: ActivatedRoute,
                private router: Router) { }

    get Coment(){
        return this.commentario;
    }

    onAddComment(): void{
        let newComment: IComment = {
            author : 'jon',
            comment : this.commentario
        };

        this.postService.postAddComment(this.id, newComment);
    }

    postList: IPost[]=[];
    id:number;
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${this.id}`;
        this.postService.getPostById(this.id).subscribe({
            next: post => {
                this.post = post;
              
            },
           // error: err => this.errorMessage = err
          });
    }
    performFilter(filterBy: string): IPost[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.postList.filter((post: IPost) =>
          post.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onBack(): void{
        this.router.navigate(['/post']);
    }

  
}