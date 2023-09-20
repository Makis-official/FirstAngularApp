import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { OnePostComponent } from './one-post/one-post.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from "@angular/common/http";
import { PostsService } from "./posts.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { roleGuard } from "./role.guard";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    OnePostComponent,
    ErrorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [PostsService, roleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
