import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import liff from '@line/liff';

@Component({
  selector: 'app-animedetail',
  templateUrl: './animedetail.component.html',
  styleUrls: ['./animedetail.component.css']
})
export class AnimedetailComponent implements OnInit {
  animelist: any[] = [];
  routerStateDataId: any;
  img_anime: any
  title_anime: string = ""
  trailer_anime: any;
  synopsis_anime : string = ""

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.img_anime = history.state['img'];
    this.title_anime = history.state['title']
    this.trailer_anime = history.state['trailer'];
    this.synopsis_anime = history.state['synopsis']
    console.log(this.img_anime)
    console.log(this.title_anime);
    console.log(this.trailer_anime);
    console.log(this.synopsis_anime);
  }

  back2home(){
    this.router.navigate(['/home']);
  }
  sendtoline(){
    liff.sendMessages([
      {
        type: "image",
        originalContentUrl: this.img_anime, 
        previewImageUrl: this.img_anime 
      },
    {
      type: "text",
      text: this.title_anime,
    },
  ])
  .then(() => {
    console.log("message sent");
  })
  .catch((err) => {
    console.log("error", err);
  });
  // liff.closeWindow();
  }
}

