import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName=""
  lastName=""
  emailAdd=""
  insTitut=""

}
