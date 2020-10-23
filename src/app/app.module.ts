import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header.component';
import {DialogButtonComponent, DialogComponent} from './dialog/dialog.component';
import {PostComponent} from './home/post.component';
//import {PostCartComponent} from './home/post-cart.component';
import {CategoryComponent} from './home/category.component';
import { PostDetailComponent} from './home/post-detail';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogButtonComponent, 
    DialogComponent,
    PostComponent,
    CategoryComponent,
    PostDetailComponent
    //PostCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'post', component: PostComponent},
      { path: 'post/:id', component: PostDetailComponent },
      { path: '**', redirectTo: 'post', pathMatch: 'full' }
    ])
  ],
  entryComponents: [DialogButtonComponent],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent, DialogButtonComponent]
})
export class AppModule { }
