import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import liff from '@line/liff';

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
  Animelist: DataAnime[] = [{'title': 'Kono Subarashii Sekai ni Shukufuku wo!',
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
  'synopsis': 'For the past 13 years, the Nefarious Monster Army have appeared beneath their floating fortress every Sunday to advance their goal of conquering Earth. Luckily, the Dragon Keepers are here to save the day! Having defeated the majority of the monsters during their initial invasion, the heroes now routinely show up to clear away any remnants of resistance. Unbeknownst to the public, however, every fight beyond the first has been a deliberate show put on by both sides: the Dragon Keepers reap the fame and prestige from fighting imaginary enemies, while the surviving weakest monsters, altogether called Dusters, are allowed to live for another day.'},
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
  img_profile: any = ""
  displayName: string = ""
  isclickSearch: boolean = false
  seasons = ['winter', 'spring', 'summer', 'fall']

  onSearch = new Subject<string>();


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
    this.liff()
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

  liff(){
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
  }
  Lifflogout(){
    if (liff.isLoggedIn()) {
      liff.logout();
      liff.closeWindow();
    }
  }
}
