import { CadastroUsuario } from './../../share/models/cadastro-usuario.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroUsuario: CadastroUsuario;

  constructor() { }

  ngOnInit() {

    this.cadastroUsuario = new CadastroUsuario();
    console.log(this.cadastrarUsuario);
  }

  cadastrarUsuario(){

    console.log("cadastrado com sucesso");
  }

}
