export class Movie {
    id: number;
    name: string;
    director: string;
    imageUrl: string;
    duration: number;
    releaseDate: string;
    genres: string;



    constructor( id, name, director, imageUrl, duration, releaseDate, genres ) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.releaseDate = releaseDate;
        this.genres = genres;
    }
}
