import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-searchanime',
  templateUrl: './searchanime.component.html',
  styleUrls: ['./searchanime.component.css']
})
export class SearchanimeComponent {

  constructor(private router: Router) {
  }
  @Input() allanime:any[] = [];

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
