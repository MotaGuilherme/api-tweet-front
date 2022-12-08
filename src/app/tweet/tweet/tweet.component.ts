import {Component, OnInit} from '@angular/core';
import {TweetModel} from "../../model/tweet-model";
import {TweetService} from "../tweet.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tweet-aa',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  tweets$: Observable<TweetModel[]>
  displayedColumns = ['name', 'email', 'tweet', 'crud-tweet'];

  constructor(private tweetService: TweetService,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
  }

   ngOnInit() {
    this.listAll()
   }

    listAll() {
    this.tweets$ = this.tweetService.listAll()
      .pipe(
      catchError(error => {
        this.onErro("Error to loading tweets")
        return of([])
      })
    )
   }

   onErro(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg

      })
   }
   onAdd() {
      this.router.navigate(['register'], {relativeTo: this.route})
  }
  onDelete() {
    console.log("asdsdssadsd")

  }

}
