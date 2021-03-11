import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  initialMovies: any[] = [];
  imageUrl = environment.imageUrl;
  genres: any[] = [];
  selectedGenre: any[] = [];
  search: any;
  detail: any;

  constructor( private movie:MovieService, private http:HttpClient ) {
    this.movie.getMovie().subscribe(data => {
      this.initialMovies = data.results
      this.movies = data.results
    })
    this.movie.getGenre().subscribe(data => {
      this.genres = data.genres
    })
   }

  ngOnInit(): void {
  }

  searchFilter(event:any){
    let searchValue = event.target.value;
    console.log(searchValue)
    let searchResult:any;
    if ( !searchValue ) this.movies = this.initialMovies
    this.http.get(`${environment.baseUrl}search/movie?api_key=${environment.apiKey}&language=en-US&query=${searchValue}&page=1`).subscribe(data => {
      searchResult = data
      this.movies = searchResult.results
    })
  }

  getGenres(value:string) {
    this.selectedGenre = []
    this.genres.map(item => {
      for (let i = 0; i < 3; i++){
        if (value[i] == item.id) {
          this.selectedGenre.push(item.name)
        }
      }
    })
  }

  getDetail(id:number){
    this.http.get(`${environment.baseUrl}movie/${id}?api_key=${environment.apiKey}&language=en-US`).subscribe(data => {
      this.detail = data;
    })
  }

}
