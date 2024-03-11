import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRCodeComponent, QRCodeModule } from 'angularx-qrcode';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpClientModule } from '@angular/common/http';
//import { ReactiveFormsModule } from '@angular/forms';

// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { environment } from 'src/environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, QRCodeModule, HttpClientModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }, Camera, File, NavController, QRCodeComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}


