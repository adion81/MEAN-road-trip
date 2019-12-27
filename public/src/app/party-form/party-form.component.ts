import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.css']
})
export class PartyFormComponent implements OnInit {
  @Input() partyId;
  @Output() closeForm = new EventEmitter();
  constructor(
    private _gameService: GameService,
    private _router: Router
  ) { }
  newParty: any;
  ngOnInit() {
    if(this.partyId == 1){
      this.newParty = {
        playerOne: '',
        playerTwo: '',
        playerThree: '',
        playerFour: ''
      }
    }
    else if(this.partyId == 2){
      this.newParty = {
        playerOne: '',
        playerTwo: '',
        playerThree: '',
        playerFour: '',
        playerFive: '',
        playerSix: '',
        playerSeven: ''
      }   
    }
    else if(this.partyId == 3){
      this.newParty = {
        playerOne: '',
        playerTwo: '',
        playerThree: '',
        playerFour: '',
        playerFive: '',
        playerSix: '',
        playerSeven: '',
        playerEight: '',
        playerNine: '',
        playerTen: ''
      }
    }
  }

  createParty(){
    let submit = this._gameService.createParty(this.newParty,this.partyId);
    if(submit === true){
      this._router.navigate(['/game']);
    }
  }
  close(){
    this.closeForm.emit(true);
  }



}
