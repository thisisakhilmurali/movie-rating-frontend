export class Rating {
    
    ratingId: number;
    userName: string;
    movieId: number;
    rating: number;
    message: string;

    constructor() {
        this.ratingId = 0;
        this.userName = '';
        this.movieId = 0;
        this.rating = 0;
        this.message = '';
    }
}