import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: 'roadtrip', component:LandingComponent},
  {path:'secret/admin', component: AdminComponent},
  {path:'newgame',component:NewGameComponent},
  {path:'game',component:GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
