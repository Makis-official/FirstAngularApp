import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoComponent } from './two/two.component';
import { AllServerService } from './service/all-server.service';


@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AllServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
