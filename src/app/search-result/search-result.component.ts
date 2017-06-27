import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() public result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}