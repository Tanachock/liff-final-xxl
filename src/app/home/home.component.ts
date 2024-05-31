import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import liff from '@line/liff';

export interface DataAnime {
  title: string;
  aired: string;
  episodes: number;
  score: number;
  image_url: any;
  genres: string;
}
type UnPromise<T> = T extends Promise<infer X>? X : T;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  season: string = ""
  year: string = ""
  animes: any
  nameAnime:string = ""
  issearchAnime: boolean = false
  Animelist: DataAnime[] = []
  img_profile: any = ""
  displayName: string = ""
  seasons = ['winter', 'spring', 'summer', 'fall']

  onSearch = new Subject<string>();
  os: ReturnType<typeof liff.getOS>;  
  profile: UnPromise<ReturnType<typeof liff.getProfile>> | undefined;


  constructor(private apiService: ApiServiceService, private router: Router) { 
    this.onSearch.pipe(
      switchMap(nameAnime => {
        return this.apiService.getSearchanime(nameAnime);
      })
    ).subscribe((res: any) => {
      this.animes = res.data;
      this.convertData(this.animes);
    });
  }


  ngOnInit(): void {
    this.lineliff()
 }
  
  convertData(data: any) {
    let _data = [];
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
    console.log(this.Animelist)
  }

  searchAnime(){
    if(this.nameAnime!=""){
      this.onSearch.next(this.nameAnime);
      this.issearchAnime=true
    }else{
      this.issearchAnime=false
    }
  }

  lineliff(){
    liff.init({liffId:'2005412151-w4nvPAZm'}).then(()=>{
      this.os=liff.getOS();
      if(liff.isLoggedIn()){
        liff.getProfile().then( profile =>{
          this.profile = profile;
          console.log(this.profile)
          this.img_profile = this.profile.pictureUrl
          this.displayName = this.profile.displayName
        }).catch(console.error);
      }else{
        liff.login()
      }
    }).catch(console.error);
  }
}
