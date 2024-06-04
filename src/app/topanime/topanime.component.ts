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

  Animelist: DataAnime[] = [
    {
      'title': 'Sousou no Frieren',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1015/138006.jpg',
      'trailer': '',
      'synopsis': 'During their decade-long quest to defeat the Demon King, the members of the heros party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.',
    },
    {
      'title': 'Fullmetal Alchemist: Brotherhood',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
      'trailer': '',
      'synopsis': 'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonses body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonses soul in the physical realm by binding it to a hulking suit of armor.',
    },
    {
      'title': 'Steins;Gate',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
      'trailer': '',
      'synopsis': 'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Okabe founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.',
    },
    {
      'title': 'Gintama',
      'image_url': 'https://cdn.myanimelist.net/images/anime/3/72078.jpg',
      'trailer': '',
      'synopsis': 'Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still havent been paid... Does Gin-chan really spend all that cash playing pachinko?',
    },
    {
      'title': 'Shingeki no Kyojin Season 3 Part 2',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg',
      'trailer': '',
      'synopsis': 'Seeking to restore humanitys diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless Titans takes the stage once again.',
    },
    {
      'title': 'Gintama: The Final',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1245/116760.jpg',
      'trailer': '',
      'synopsis': 'Two years have passed following the Tendoshuus invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuros return, Gintoki Sakata begins surveying Earths ley lines for traces of the other mans Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.',
    },
    {
      'title': 'Gintama: The Final',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1245/116760.jpg',
      'trailer': '',
      'synopsis': 'Two years have passed following the Tendoshuus invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuros return, Gintoki Sakata begins surveying Earths ley lines for traces of the other mans Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.',
    }, 
    {
      'title': 'Gintama',
      'image_url': 'https://cdn.myanimelist.net/images/anime/4/50361.jpg',
      'trailer': '',
      'synopsis': 'After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.',
    }
    , {
      'title': 'Hunter x Hunter (2011)',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
      'trailer': '',
      'synopsis': 'Hunters devote themselves to accomplishing hazardous tasks, all from traversing the worlds uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.',
    }, {
      'title': 'Ginga Eiyuu Densetsu',
      'image_url': 'https://cdn.myanimelist.net/images/anime/1976/142016.jpg',
      'trailer': '',
      'synopsis': 'The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPAs reserved historian, Yang Wenli.',
    }
  ]
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
