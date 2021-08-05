import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameService } from './services/game.service';
import { CharacterCreateComponent } from './components/character-create/character-create.component'

const services = [
  GameService,
]
@NgModule({
  declarations: [
    AppComponent,
    CharacterCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule { }
