import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DangerService } from './danger.service';
import { CityService } from './city.service';
import { GameService } from './game.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NewCityComponent } from './new-city/new-city.component';
import { NewDangerComponent } from './new-danger/new-danger.component';
import { ShowCityComponent } from './show-city/show-city.component';
import { ShowDangerComponent } from './show-danger/show-danger.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { EditDangerComponent } from './edit-danger/edit-danger.component';
import { LandingComponent } from './landing/landing.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PartyFormComponent } from './party-form/party-form.component';
import { OpenScreenComponent } from './open-screen/open-screen.component';
import { GameComponent } from './game/game.component';
import { CityComponent } from './city/city.component';
import { StoreComponent } from './store/store.component';
import { RoadComponent } from './road/road.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NewCityComponent,
    NewDangerComponent,
    ShowCityComponent,
    ShowDangerComponent,
    EditCityComponent,
    EditDangerComponent,
    LandingComponent,
    NewGameComponent,
    PartyFormComponent,
    OpenScreenComponent,
    GameComponent,
    CityComponent,
    StoreComponent,
    RoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CityService,
    GameService,
    DangerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
