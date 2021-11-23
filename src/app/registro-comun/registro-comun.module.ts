import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroComunPageRoutingModule } from './registro-comun-routing.module';

import { RegistroComunPage } from './registro-comun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroComunPageRoutingModule
  ],
  declarations: [RegistroComunPage]
})
export class RegistroComunPageModule {}
