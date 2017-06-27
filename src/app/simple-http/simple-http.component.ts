import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  public data: Object;
  public loading: boolean;
  public index: number;

  constructor(
    private http: Http
  ) {
    this.http = http;
    this.index = 1;
  }

  ngOnInit() {
  }

  makeRequest() {
    this.loading = true;
    this.http.request(`http://jsonplaceholder.typicode.com/posts/${this.index}`)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      })
    this.index += 1;
  }

}
