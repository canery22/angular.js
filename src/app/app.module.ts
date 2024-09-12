import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel kullanıyorsan

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component'; // Bileşeni import et

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent // Bileşeni buraya ekle
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }