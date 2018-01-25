import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../shared/services/movie.service';
import {Movie} from '../../../models/movie';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

    private movies: Movie[];
    private term;

    constructor(private movieService: MovieService,
                private route: ActivatedRoute,
                private router: Router,) {
    }

    ngOnInit() {
        const term = this.route.snapshot.paramMap.get('term');
        this.movieService.searchMoviesByTerm(term).subscribe(
            data => {
                this.movies = data;
                this.term = term;
            }, (term) => {
                alert('There are no movies with searched term: ' + term);
                this.router.navigate(['movies']);
            });

    }


}

