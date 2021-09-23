import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { AppState } from "./app.state";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { LanguagePipe } from './common/language.pipe';
import { CustomCurrencyPipe } from './common/customCurrency.pipe';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]

const states = [
  AppState
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MainComponent,
    LanguagePipe,
    CustomCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot(states, { developmentMode: !environment.production }),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
