import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePerfilPageRoutingModule } from './service-perfil-routing.module';

import { ServicePerfilPage } from './service-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePerfilPageRoutingModule
  ],
  declarations: [ServicePerfilPage]
})
export class ServicePerfilPageModule {}
