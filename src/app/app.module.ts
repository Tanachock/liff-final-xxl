import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { TopanimeComponent } from './topanime/topanime.component';
import { AnimeseasonComponent } from './animeseason/animeseason.component';
import { NavComponent } from './nav/nav.component';
import { SearchanimeComponent } from './searchanime/searchanime.component';
import { AnimedetailComponent } from './animedetail/animedetail.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopanimeComponent,
    AnimeseasonComponent,
    NavComponent,
    SearchanimeComponent,
    AnimedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
