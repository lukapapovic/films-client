import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'films',component:FilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
