import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../../models/item/item.model";

@Injectable()
export class PubListService {
    private pubListRef = this.db.list<Item>('pub-list');

    constructor(private db: AngularFireDatabase){
        
    }
    getPubList(){
        return this.pubListRef;
    }
    addItem(item: Item){
        return this.pubListRef.push(item);
    }
    editItem(item: Item){
        return this.pubListRef.update(item.key, item);
    }
}