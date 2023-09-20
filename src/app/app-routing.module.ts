import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { OnePostComponent } from './one-post/one-post.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { roleGuard } from "./role.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'posts',
    component: AllPostsComponent,
  },
  {
    path: 'posts/:id',
    component: OnePostComponent,
    canActivate: [roleGuard],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
