import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicePerfilPage } from './service-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ServicePerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePerfilPageRoutingModule {}
