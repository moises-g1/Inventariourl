import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddProductPageRoutingModule } from './add-product-routing.module';
import { IonicModule } from '@ionic/angular';

import { QRCodeModule } from 'angularx-qrcode';
import { AddProductPage } from './add-product.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductPageRoutingModule,     // RouterModule.forChild(Routes),
    QRCodeModule,
    

  ],
  declarations: [AddProductPage]
})
export class AddProductPageModule {}
