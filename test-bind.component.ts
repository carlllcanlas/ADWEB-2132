import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//card
studName=""
section=""
subject=""
prelim=0
final=0
midterm=0
studentNumber=0;
//card2
studName1=""
section1=""
subject1=""
prelim1=0
final1=0
midterm1=0
studentNumber1=0;

}
