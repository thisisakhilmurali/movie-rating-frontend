export class Movie {

    movieId: number;
    movieName: string;
    movieDirector: string;
    movieGenre: string;
    movieReleaseDate: string;
    movieLanguage: string;
    duration: string;
    country: string;
    movieDescription: string;
    overallRate: number;
    imageUrl: string;
       
    constructor() {
        this.movieId = 0;
        this.movieName = '';
        this.movieDirector = '';
        this.movieGenre = '';
        this.movieReleaseDate = '';
        this.movieLanguage = '';
        this.duration = '';
        this.country = '';
        this.movieDescription = '';
        this.overallRate = 0;
        this.imageUrl = '';
    }
}