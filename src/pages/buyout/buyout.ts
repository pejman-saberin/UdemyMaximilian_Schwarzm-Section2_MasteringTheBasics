import {Component} from '@angular/core';
import {NavParams,NavController} from 'ionic-angular';


@Component({
  selector:'page-buyout',
  templateUrl:'buyout.html',
})
export class BuyoutPage{

  productData:{name:string, quanity:number}
  constructor(private navParams: NavParams, private navCtrl:NavController){
    this.productData=this.navParams.data;

  }

  onConfirmPurchase(){
    this.navCtrl.popToRoot();//you can also pass data in this metod
  }

  //you can use ngoninit to retrive data



}
