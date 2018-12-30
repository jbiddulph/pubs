import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { PubListService } from '../../app/services/pub-list/pub-list.service';


/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  item: Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pub: PubListService) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.pub.editItem(item)
    .then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
