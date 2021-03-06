import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import {HttpClientModule} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';





@NgModule({
  declarations: [
    AppComponent, 
    
   
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    
  HttpClientModule,
  
  IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    Geolocation,
  
    SplashScreen,
    Camera,
    
    FileTransfer,
    GooglePlus,
   


    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
