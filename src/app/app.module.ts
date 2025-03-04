import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { InvitationComponent } from './components/invitation/invitation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    InvitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
