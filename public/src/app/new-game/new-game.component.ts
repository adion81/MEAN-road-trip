import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private _gameService: GameService) { }
  party: any;
  switch: Boolean = true;
  ngOnInit() {

  }
  selectParty(num){
    this.party = num;
    this.switch = false;
  }
  closeForm(e){
    this.switch = true;
    this.party = null;
  }

}
