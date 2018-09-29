import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SkillwindowComponent } from './skillwindow/skillwindow.component';
import { CharacterwindowComponent } from './characterwindow/characterwindow.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { HerocreatorComponent } from './herocreator/herocreator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';

import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ShopComponent,
    InventoryComponent,
    SkillwindowComponent,
    CharacterwindowComponent,
    MainwindowComponent,
    HerocreatorComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
