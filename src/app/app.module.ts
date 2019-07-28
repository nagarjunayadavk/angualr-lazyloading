import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { FirstModule } from './first-module/first-module';
// import { SecondModule } from './second-module/second-module';
// import { ThirdModule } from './third-module/third-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FirstModule,
    // SecondModule,
    // ThirdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
