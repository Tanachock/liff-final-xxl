import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import liff from '@line/liff';
import { LiffService } from '../liff.service';

export interface DataAnime {
  title: string;
  image_url: any;
  trailer: any;
  synopsis:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  animes: any
  nameAnime:string = ""
  issearchAnime: boolean = false
  Animelist: DataAnime[] = []
  img_profile: any = ""
  displayName: string = ""
  isclickSearch: boolean = false
  seasons = ['winter', 'spring', 'summer', 'fall']

  onSearch = new Subject<string>();


  constructor(private apiService: ApiServiceService, private router: Router, private liffService: LiffService) { 
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
    this.getProfile()
 }
  
  convertData(data: any) {
    let _data = [];
    for(let i=0;i<data.length;i++){
      _data.push({
        'title': data[i]["title"] || "-",
        'image_url': data[i]["images"]?.jpg?.image_url || "-",
        'trailer': data[i]["trailer"]['url']||"",
        'synopsis': data[i]["synopsis"]||""
      })
    }
    this.Animelist = _data;
    console.log("convert data",this.Animelist)
  }

  searchAnime(){
    if(this.nameAnime!=""){
      this.onSearch.next(this.nameAnime);
      this.issearchAnime=true
    }else{
      this.issearchAnime=false
    }
  }
  clickSearch(){
    this.isclickSearch = true
  }
  backtohome(){
    this.isclickSearch = false
    this.issearchAnime=false
  }

  getProfile(){
    if(liff.isLoggedIn()){
      liff.getProfile().then( profile =>{
        this.img_profile = profile.pictureUrl
        this.displayName = profile.displayName
      }).catch(console.error);
    }
    console.log(this.img_profile," ", this.displayName)
  }
  /*liff(){
    liff.init({liffId:'2005412151-w4nvPAZm'}).then(()=>{
      if(liff.isLoggedIn()){
        liff.getProfile().then( profile =>{
          this.img_profile = profile.pictureUrl
          this.displayName = profile.displayName
        }).catch(console.error);
      }else{
        liff.login()
      }
    }).catch(console.error);
  }*/
  Lifflogout(){
    if (liff.isLoggedIn()) {
      liff.logout();
      liff.closeWindow();
    }
  }
}
