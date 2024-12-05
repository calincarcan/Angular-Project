import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EsriMapComponent } from "./pages/esri-map/esri-map.component";
import { CoffeeComponent } from "./pages/coffee/coffee.component";
import { AppRoutingModule } from "./app-routing.module";

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FirebaseService } from './services/firebase';


@NgModule({
    declarations: [AppComponent, EsriMapComponent, CoffeeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase, 'AngularDemoFirebase'),
        AngularFireDatabaseModule],
    providers: [
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
