import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SkillwindowComponent } from './skillwindow/skillwindow.component';
import { CharacterwindowComponent } from './characterwindow/characterwindow.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { HerocreatorComponent } from './herocreator/herocreator.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ShopComponent,
    InventoryComponent,
    SkillwindowComponent,
    CharacterwindowComponent,
    MainwindowComponent,
    HerocreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
