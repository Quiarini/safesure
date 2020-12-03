import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadContatosPage } from './cad-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: CadContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadContatosPageRoutingModule {}
