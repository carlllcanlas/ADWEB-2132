import { Component, OnInit } from '@angular/core';
 import { User } from '../user';

@Component({
  selector: 'app-grade-book',
  templateUrl: './grade-book.component.html',
  styleUrls: ['./grade-book.component.css']
})
export class GradeBookComponent implements OnInit {

users1: User[]=[
  {"userld":1,"userName":'User1'},
  {"userld":2,"userName":'User2'},
];


isLogIn:boolean=false;
isLogOut:boolean=true;


 list = [1,2,3,4,5];
 studentArr: any[] = [
   {
     "id": 1,
     "name":"student1"
   },
   {"id": 2,
   "name":"student2",
   },
   {"id": 3,
   "name":"student3",
   },
   {"id": 4,
   "name":"student4",
   }];
   trackByData(index:number, studentArr:any):number{
     return studentArr.id;
   }
   users = [

    { firstName: 'Joseph', lastName: 'Diaz', email: 'joseph.diaz@test.com', role: 'User' }, 
    { firstName: 'James', lastName: 'Reynolds', email: 'james.reynolds@test.com', role: 'Admin' },
    { firstName: 'Djoan', lastName: 'Jaworski', email: 'djoan.jaworski@test.com', role: 'Admin'},
    { firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia@test.com', role: 'User'},
    { firstName: 'Jay', lastName: 'Bernardo', email: 'jay.bernardo@test.com', role: 'User' }
    ];

    logInName ='admin';

   
  constructor() { }

  ngOnInit(): void {


    
  }
  

}
