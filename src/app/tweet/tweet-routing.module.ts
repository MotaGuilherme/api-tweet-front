import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TweetComponent} from "./tweet/tweet.component";
import {TweetFormComponent} from "./tweet-form/tweet-form.component";

const routes: Routes = [
  { path: '', component: TweetComponent},
  { path: 'register', component: TweetFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetRoutingModule { }
