import { templateJitUrl } from '@angular/compiler'
import { Component } from '@angular/core';

@Component({
    selector: 'pm-categories',
    templateUrl: './category.component.html'
})

export class CategoryComponent{
    categories: any[]=['All','Travel','LifeStyle','Business','Food','Work'];
}
