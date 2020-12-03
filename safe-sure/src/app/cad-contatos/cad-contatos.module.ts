import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadContatosPageRoutingModule } from './cad-contatos-routing.module';

import { CadContatosPage } from './cad-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadContatosPageRoutingModule
  ],
  declarations: [CadContatosPage]
})
export class CadContatosPageModule {}
