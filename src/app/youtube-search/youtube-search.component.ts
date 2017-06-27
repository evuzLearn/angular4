import {
  Component,
  OnInit
} from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  public results: SearchResult[];
  public loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]) {
    this.results = results;
    console.log('results: ', results);
  }
}
