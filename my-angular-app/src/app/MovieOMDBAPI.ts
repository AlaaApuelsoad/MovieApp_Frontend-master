export class MovieOMDBAPI {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Plot: string;
    Poster: string;
  
    constructor(
      Title: string,
      Year: string,
      Genre: string,
      Director: string,
      Plot: string,
      Poster: string
    ) {
      this.Title = Title;
      this.Year = Year;
      this.Genre = Genre;
      this.Director = Director;
      this.Plot = Plot;
      this.Poster = Poster;
    }
  }
  