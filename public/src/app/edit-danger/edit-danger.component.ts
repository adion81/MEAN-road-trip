import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-danger',
  templateUrl: './edit-danger.component.html',
  styleUrls: ['./edit-danger.component.css']
})
export class EditDangerComponent implements OnInit {
  @Input() dangerId;

  constructor() { }

  ngOnInit() {
  }

}
