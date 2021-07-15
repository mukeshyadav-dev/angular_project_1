import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostdetailsComponent  } from './components/postdetails/postdetails.component';
import { NotFoundComponent  } from './components/not-found/not-found.component';

const routes : Routes =[
  {path:'', component:HomeComponent},
  {path:'user', component:UserComponent},
  {path:'posts', component:PostsComponent},
  {path:'postdetails/:id', component:PostdetailsComponent},
  {path:'postdetails', component:PostdetailsComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  //declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
