import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { PubListService } from '../../app/services/pub-list/pub-list.service';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pubs: PubListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  addItem(item: Item){
    this.pubs.addItem(item).then(ref => {
      this.navCtrl.setRoot('HomePage', {key : ref.key});
    })
  }

}
