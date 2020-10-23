import { Component } from '@angular/core';
import { IPost} from './IPost';
import { PostService } from './post.service';

@Component({
    selector: 'pm-post',
    templateUrl: './post.component.html'
  })

export class PostComponent{
    filteredPostList: IPost[];
    _listFilter: string;
    errorMessage: string;

    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
    }

    postList: IPost[]=[];

    constructor(private postService: PostService){
    }

    onValChange(category){
      console.log(category);
      if(category == 'All'){
        this.filteredPostList = this.postList;
      }
      else {
        this.filteredPostList = category ? this.performFilter(category) : this.postList;
      }
    }

    performFilter(filterBy: string): IPost[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.postList.filter((post: IPost) =>
        post.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
      
      this.postService.getPost().subscribe({
        next: postList => {
          this.postList = postList;
          this.filteredPostList = this.postList;

        },
        error: err => this.errorMessage = err
      });
    }
}