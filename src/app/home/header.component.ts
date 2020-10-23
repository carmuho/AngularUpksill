import { Component } from '@angular/core';

@Component({
    selector: 'pm-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    pageTitle: string = 'Making yout Lige Easier';
    pageSubTitle: string = 'Discovering the World';
}