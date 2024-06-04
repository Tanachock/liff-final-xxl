import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NavigationExtras, Router } from '@angular/router';

export interface DataAnime {
  title: string;
  image_url: any;
  trailer: any;
  synopsis:string;
}
@Component({
  selector: 'app-animeseason',
  templateUrl: './animeseason.component.html',
  styleUrls: ['./animeseason.component.css']
})
export class AnimeseasonComponent {

  constructor(private apiService: ApiServiceService, private router: Router) { }
  
  animelistseason: any = {
    'title': 'naruto',
    'image_url': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNaruto&psig=AOvVaw2rTHgb8wyD7PBy0JCoIOLI&ust=1717564201558000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCl4rKXwYYDFQAAAAAdAAAAABAE',
    'trailer': 'https://www.youtube.com/watch?v=QczGoCmX-pI',
    'synopsis': 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village'
  }
  seasons = ['winter', 'spring', 'summer', 'fall']

  ngOnInit(): void {
    this.getSeasonnow()
  }
  getSeasonnow(){
    this.apiService.getSeasonNow().subscribe((res:any)=>{
      this.animelistseason = res.data;
      console.log(res.data)
      this.convertData(this.animelistseason)
    })
  }

  Animelist: DataAnime[] = [
    /*{'title': 'Kono Subarashii Sekai ni Shukufuku wo!',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1895/142748.jpg',
    'trailer': 'https://www.youtube.com/watch?v=NU87y-38glA',
    'synopsis': 'After dying a laughable and pathetic death on his way back from buying a game, high school student and recluse Kazuma Satou finds himself sitting before a beautiful but obnoxious goddess named Aqua. She provides the NEET with two options: continue on to heaven or reincarnate in every gamer s dream—a real fantasy world! Choosing to start a new life, Kazuma is quickly tasked with defeating a Demon King who is terrorizing villages. But before he goes, he can choose one item of any kind to aid him in his quest, and the future hero selects Aqua. But Kazuma has made a grave mistake—Aqua is completely useless!'},
    {'title': 'Kimetsu no Yaiba: Hashira Geiko-hen',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1565/142711.jpg',
    'trailer': 'https://www.youtube.com/watch?v=Tf31dGdlWxE',
    'synopsis': 'The members of the Demon Slayer Corps and their highest-ranking swordsmen, the Hashira. In preparation for the forthcoming final battle against Muzan Kibutsuji, the Hashira Training commences. While each carry faith and determination within their hearts, Tanjiro and the Hashira enter a new story.'},
    {'title': 'Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1876/141251.jpg',
    'trailer': 'https://www.youtube.com/watch?v=Tf31dGdlWxE',
    'synopsis': 'Following the faceless god Hitogamis advice seems to have worked wonders for Rudeus Greyrat. After enrolling into the University of Magic as he was told, Rudeus reunites with his childhood friend Sylphiette, who put a valiant effort into curing his condition. The two grow ever closer together and decide to host a wedding party, inviting the friends they have made over the years to announce and formalize their relationship.'},
    {'title': 'Tensei shitara Slime Datta Ken 3rd Season',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1587/141789.jpg',
    'trailer': '',
    'synopsis': 'I am Slime'},
    {'title': 'Kaijuu 8-gou',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1370/140362.jpg',
    'trailer': '',
    'synopsis': 'After the destruction of their hometown, childhood friends Kafka Hibino and Mina Ashiro make a pact to become officers in the Defense Force—a militarized organization tasked with protecting Japan from colossal monsters known as "kaijuu." Decades later, the 32-year-old Kafka has all but given up on his dreams of heroism. Instead, he cleans up the remains of the slaughtered kaijuu after they are defeated by valiant soldiers—including Mina, who has successfully achieved their shared goal.'},
    {'title': 'Boku no Hero Academia 7th Season',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1529/140306.jpg',
    'trailer': '',
    'synopsis': 'Hero academia'},
    {'title': 'Wind Breaker',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1438/141816.jpg',
    'trailer': '',
    'synopsis': 'From an early age, Haruka Sakura was made an outcast due to his unconventional appearance and lack of social skills. However, the rough treatment turned him into a proficient fighter, which is now the only thing he prides himself on. Starting at Furin High School, where it is rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.'},

    {'title': 'Ookami to Koushinryou: Merchant Meets the Wise Wolf',
    'image_url': 'https://images-ext-1.discordapp.net/external/EZp8UJcU2LDZEDK6-YFMGnJYkWQJe0jfUQN9iztHCZM/https/cdn.myanimelist.net/images/anime/1059/142414.jpg?format=webp&width=450&height=636',
    'trailer': '',
    'synopsis': 'With a cartload of fur pelts in tow, traveling merchant Kraft Lawrence stops by the village of Pasloe. According to local folklore, centuries ago, one of the villagers made a promise with the wolf deity Holo, who swore to bless Pasloe with bountiful harvests of wheat. Yet, as time passed, such stories became little more than relics of the past'},
    {'title': 'Maou Gakuin no Futekigousha II: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou Part 2',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1399/141651.jpg',
    'trailer': '',
    'synopsis': 'Second half of Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II'},
    {'title': 'Sentai Daishikkaku',
    'image_url': 'https://cdn.myanimelist.net/images/anime/1183/141489.jpg',
    'trailer': '',
    'synopsis': 'For the past 13 years, the Nefarious Monster Army have appeared beneath their floating fortress every Sunday to advance their goal of conquering Earth. Luckily, the Dragon Keepers are here to save the day! Having defeated the majority of the monsters during their initial invasion, the heroes now routinely show up to clear away any remnants of resistance. Unbeknownst to the public, however, every fight beyond the first has been a deliberate show put on by both sides: the Dragon Keepers reap the fame and prestige from fighting imaginary enemies, while the surviving weakest monsters, altogether called Dusters, are allowed to live for another day.'},*/
  ]
  // Animelistseasonnow: DataAnime[] = []
  convertData(data: any) {
    let _data = [];
    // console.log("data in convert ",data)
    // console.log("len ",data.length)
    for(let i=0;i<data.length;i++){
      _data.push({
        'title': data[i]["title"] || "-",
        'episodes': data[i]["episodes"] || "-",
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
