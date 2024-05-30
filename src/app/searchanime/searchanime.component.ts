import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchanime',
  templateUrl: './searchanime.component.html',
  styleUrls: ['./searchanime.component.css']
})
export class SearchanimeComponent {
  @Input() allanime:any[] = [];
}
