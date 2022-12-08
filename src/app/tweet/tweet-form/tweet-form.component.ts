import { Component, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,

} from "@angular/forms";
import {TweetService} from "../tweet.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.scss']
})
export class TweetFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    email: [''],
    tweet:['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
              private service: TweetService,
              private snackBar: MatSnackBar,
              private location: Location,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
      this.service.save(this.form.value)
        .subscribe(result => console.log(result),error => this.onError())
  }

  onCancel() {
    this.router.navigate(['tweet'])
  }

  onError() {
    this.snackBar.open('Error saving course', '', { duration: 3000})

  }
}
