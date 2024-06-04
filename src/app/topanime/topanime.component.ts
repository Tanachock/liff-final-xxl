import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NavigationExtras, Router } from '@angular/router';

export interface DataAnime {
  title: string;
  image_url: any;
  trailer: any;
  synopsis:string;
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
      console.log(res.data)
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
        'image_url': data[i]["images"]?.jpg?.image_url || "-",
        'trailer': data[i]["trailer"]['url']||"",
        'synopsis': data[i]["synopsis"]||""
      })
    }
    this.Animelist = _data;
    console.log(this.Animelist)
}
    selectAnime(img:any,titel:string,trailer:any,synopsis:string){
      // console.log('click anime')
      const navigationExtras: NavigationExtras = {
        state: { img: img,
          title: titel,
          trailer: trailer,
          synopsis: synopsis
        }
      };
      this.router.navigate(['/animedetail'],navigationExtras);
  }
}
