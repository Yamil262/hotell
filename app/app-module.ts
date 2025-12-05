import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/commons/header/header';
import { Footer } from './components/commons/footer/footer';
import { Menu } from './components/commons/menu/menu';
import { Firebase } from './components/pages/firebase/firebase';
import { Home } from './components/pages/home/home';
import { provideHttpClient } from '@angular/common/http';
import { Img } from './assets/img/img';
@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Menu,
    Firebase,
    Home,
    Img
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:  [provideHttpClient()],
  
  bootstrap: [App]
})
export class AppModule { }
// provideBrowserGlobalErrorListeners(),
// provideClientHydration(withEventReplay())
