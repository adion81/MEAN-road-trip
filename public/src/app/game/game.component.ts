import { Component, OnInit } from '@angular/core';
import {  GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private _gameService: GameService
  ) { }

  ngOnInit() {
    console.log(this._gameService.getParty());
  }

}
