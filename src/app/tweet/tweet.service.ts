import { Injectable } from '@angular/core';
import {TweetModel} from "../model/tweet-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  apiUrl = 'http://localhost:3002';


constructor(private httpClient: HttpClient) { }

  listAll(){
    return this.httpClient.get<TweetModel[]>(`${this.apiUrl}/tweet`);
  }

  save(record: Partial<TweetModel>) {
    return this.httpClient.post<TweetModel>(`${this.apiUrl}/tweet`, record)
  }

}
