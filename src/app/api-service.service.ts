import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getSearchanime(nameAnime: string){
    console.log(nameAnime)
    return this.http.get(`https://api.jikan.moe/v4/anime?q=${nameAnime}`)
  }
  
  getTopanime(){
    return this.http.get(`https://api.jikan.moe/v4/top/anime?limit=10`)
  }

  getSeasonNow(){
    return this.http.get(`https://api.jikan.moe/v4/seasons/now`)
  }
}
