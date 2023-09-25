import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { onePost } from './two/one-post.resolver';

const routes: Routes = [
  {
    path: 'TwoComponent',
    component: TwoComponent,
    resolve: [onePost]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
