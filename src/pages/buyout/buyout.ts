import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';


@Component({
  selector:'page-buyout',
  templateUrl:'buyout.html',
})
export class BuyoutPage{

  productData:{name:string, quanity:number}
  constructor(private navParams: NavParams){
    this.productData=this.navParams.data;

  }

  //you can use ngoninit to retrive data



}
