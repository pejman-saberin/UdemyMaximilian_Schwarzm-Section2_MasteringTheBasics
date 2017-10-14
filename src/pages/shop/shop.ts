import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import {BuyoutPage} from "../buyout/buyout";


@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController) {
  }

  onGoToBuyout(){
    this.navCtrl.push(BuyoutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

}
