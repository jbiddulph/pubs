import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PubListService } from '../../app/services/pub-list/pub-list.service';

import { Item } from '../../models/item/item.model';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pubList$: Observable<Item[]>;
  
  constructor(public navCtrl: NavController, 
    private pubs: PubListService
  ) {
    this.pubList$ = this.pubs
    .getPubList() //DB List
    .snapshotChanges() //Key and Value
    .pipe(
    map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val()
        }));
      }));
    }

  }
