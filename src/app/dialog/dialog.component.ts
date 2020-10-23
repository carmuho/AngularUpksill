import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { IComment } from '../home/IComment';
import { IPost } from '../home/IPost';
import { PostService } from '../home/post.service';
/**
 * @title Dialog elements
 */
@Component({
  selector: 'pm-dialog',
  templateUrl: 'dialog-button.component.html',
})
export class DialogButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}


@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  categories: any[]=['Travel','LifeStyle','Business','Food','Work'];
    title: string;
    description: string;
    category: string;
    image: string;

  constructor (private postService: PostService){}

  onAddPost(){
    let newPost: IPost = {
        postId : 0,
        title: this.title,
        description: this.description,
        category: this.category,
        comments: [],
        image: this.image,
    };
    console.log("asdada");
    this.postService.postAddPost(newPost);
}
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */