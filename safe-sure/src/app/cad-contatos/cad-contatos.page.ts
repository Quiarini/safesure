import { ContatoSeguranca } from './../../share/models/contato-seguranca.model';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-cad-contatos',
  templateUrl: './cad-contatos.page.html',
  styleUrls: ['./cad-contatos.page.scss'],
})
export class CadContatosPage implements OnInit {

  cadastroContato: ContatoSeguranca;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {

    this.cadastroContato = new ContatoSeguranca;
  }

  cadastrarContato(){

    console.log("Cadastro de Contato com sucesso");
  }

  dismissModal(){

    this.modalCtrl.dismiss();

  }

}
