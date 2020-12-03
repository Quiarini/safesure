import { CadContatosPage } from './../cad-contatos/cad-contatos.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContatoSeguranca } from 'src/share/models/contato-seguranca.model';
import { ContatoSegurancaService } from 'src/share/services/contato-seguranca.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  contatoSegurancaList: ContatoSeguranca[];

  constructor(
    private contatoSegurancaService: ContatoSegurancaService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit(){

    this.contatoSegurancaService.getContatosSeguranca().subscribe(contatos => {
      this.contatoSegurancaList = contatos;
      console.log(this.contatoSegurancaList);
    });
  }

  async cadastrarContato() {
    const contatosModal = await this.modalCtrl.create({
      component: CadContatosPage
    });

    await contatosModal.present();


  }

}
