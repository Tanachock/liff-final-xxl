import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

export interface DataAnime {
  title: string;
  aired: string;
  episodes: number;
  score: number;
  image_url: any;
  genres: string;
}
@Component({
  selector: 'app-topanime',
  templateUrl: './topanime.component.html',
  styleUrls: ['./topanime.component.css']
})
export class TopanimeComponent implements OnInit{

  constructor(private apiService: ApiServiceService, private router: Router) { }
  
  animelisttop: any

  ngOnInit(): void {
    this.getTopanime()
  }
  getTopanime(){
    this.apiService.getTopanime().subscribe((res:any)=>{
      this.animelisttop = res.data;
      // console.log(res.data)
      this.convertData(this.animelisttop)
    })
  }

  Animelist: DataAnime[] = []
  // Animelistseasonnow: DataAnime[] = []
  convertData(data: any) {
    let _data = [];
    // console.log("data in convert ",data)
    // console.log("len ",data.length)
    for(let i=0;i<data.length;i++){
      _data.push({
        'title': data[i]["title"] || "-",
        'aired': data[i]["aired"] || {},
        'episodes': data[i]["episodes"] || "-",
        'score': data[i]["score"] || "-",
        'image_url': data[i]["images"]?.jpg?.image_url || "-",
        'genres': data[i]["genres"] || [],
      })
    }
    this.Animelist = _data;
}
}
