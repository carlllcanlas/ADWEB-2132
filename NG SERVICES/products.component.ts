import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  todaydate: any;
  newcomponentproperty: any;
  newcomponent = "entered in newcomponent";
  products: any;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
    this.products = this.myservice.allProducts();
  }

}