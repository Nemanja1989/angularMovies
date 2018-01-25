import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    private searchName: string;

    constructor(private router: Router) { }

    searchMovie(term) {
        this.router.navigate(['/search', this.searchName]);
    }


    ngOnInit() {
  }

}
