import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetRoutingModule } from './tweet-routing.module';
import { TweetComponent } from './tweet/tweet.component';
import {AppMaterialModule} from "../shared/app-material.module";
import {SharedModule} from "../shared/shared.module";
import { TweetFormComponent } from './tweet-form/tweet-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TweetComponent,
    TweetFormComponent
  ],
  exports: [
    TweetComponent
  ],
  imports: [
    CommonModule,
    TweetRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class TweetModule { }
