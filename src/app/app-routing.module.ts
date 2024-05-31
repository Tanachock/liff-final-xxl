import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopanimeComponent } from './topanime/topanime.component';
import { AnimedetailComponent } from './animedetail/animedetail.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'topanime',component:TopanimeComponent},
  { path:'animedetail',component:AnimedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
