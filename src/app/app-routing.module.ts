import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { OneElementComponent } from './one-element/one-element.component';
import { DetailsComponent } from './one-element/details/details.component';
import { ListComponent } from './one-element/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AppComponent', 
    pathMatch: 'full'
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'item/:id',
    component: OneElementComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
