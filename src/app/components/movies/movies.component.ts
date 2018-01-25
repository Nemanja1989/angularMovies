import {Component, OnInit} from '@angular/core';
import {Injector, Inject} from '@angular/core';
import {MovieService} from '../../shared/services/movie.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    private movieService: MovieService;
    private movies;

    constructor(private injector: Injector) {

    }

    ngOnInit() {
        this.movieService = this.injector.get(MovieService);
        this.movieService.getMovies().subscribe(
            data => {
                this.movies = data;
                console.log(this.movies);
            },
            (err: HttpErrorResponse) => {
                alert(`Backend returned code ${err.status} with message: ${err.error}`);
            }
        );

    }

}
