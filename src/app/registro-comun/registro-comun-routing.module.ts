import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComunPage } from './registro-comun.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroComunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroComunPageRoutingModule {}
