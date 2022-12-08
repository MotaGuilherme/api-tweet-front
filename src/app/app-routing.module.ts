import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TweetComponent} from "./tweet/tweet/tweet.component";

const routes: Routes = [
  {path: '', pathMatch: 'full' ,redirectTo: 'tweet'},
  {
  path: 'tweet',
  loadChildren: () => import('./tweet/tweet.module').then(m => m.TweetModule),
}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
