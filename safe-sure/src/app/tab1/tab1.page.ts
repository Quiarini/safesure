import { SMS } from '@ionic-native/sms/ngx';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoSeguranca } from 'src/share/models/contato-seguranca.model';
import { ContatoSegurancaService } from 'src/share/services/contato-seguranca.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  contatoSegurancaList: ContatoSeguranca[] = [];

  constructor(
    private contatoSegurancaService: ContatoSegurancaService,
    private router: Router,
    // private sms: SMS
    ) {}

  openShare(){
    this.router.navigate(['share']);
  }

  ngOnInit(){

    this.contatoSegurancaService.getContatosSeguranca().subscribe(contatos => {
      this.contatoSegurancaList = contatos;
      console.log(this.contatoSegurancaList);
    });

  }

  sendSms(){

    alert('Mensagem enviada')
  }

  // sendSMS(){
  //   for(var i=0; i<this.contatoSegurancaList.length; i++){

  //     this.sms.send(this.contatoSegurancaList[i].telefone,this.contatoSegurancaList[i].msghelp);
  //   }

  // }

}
