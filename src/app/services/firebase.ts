import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

export interface IDatabaseItem {
    name: string;
    val: string;
}

@Injectable()
export class FirebaseService {

    listFeed: Observable<any[]>;
    objFeed: Observable<any>;

    constructor(public db: AngularFireDatabase) {}

    connectToDatabase() {
        this.listFeed = this.db.list('list').valueChanges();
        this.objFeed = this.db.object('obj').valueChanges();
    }

    getCoffeeList() {
        return this.db.list('listaCafenele').valueChanges();
    }

    getChangeFeedList() {
        return this.listFeed;
    }

    getChangeFeedObject() {
        return this.objFeed;
    }

    removeListItems() {
        this.db.list('list').remove();
    }

    updateUserPosition(position: { latitude: number; longitude: number }) {
        this.db.object('userPosition').set(position);
    }

    getUserPosition() {
        return this.db.object('userPosition').valueChanges();
    }

    addListObject(data: { latitude: number; longitude: number }) {
        this.db.list('mapPoints').push(data);
    }

    getMapPoints() {
        return this.db.list('mapPoints').valueChanges();
    }

    removeMapPoints() {
        this.db.list('mapPoints').remove();
    }
}
