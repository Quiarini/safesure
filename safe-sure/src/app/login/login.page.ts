import { CadastroUsuario } from 'src/share/models/cadastro-usuario.model';
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/share/models/login-usuario.model';
import { UsuarioServiceService } from 'src/share/services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: LoginUsuario;
  usuariosCadastrados: CadastroUsuario[] = [];

  usuarioLogado: CadastroUsuario[] = [];

  msgEmailInvalido = 'E-mail informado nãoo cadastrado';

  constructor(
    private usuarioService: UsuarioServiceService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.loginUsuario = new LoginUsuario;
    this.usuarioService.getUsuariosCadastrados().subscribe(usuarios => {
      this.usuariosCadastrados = usuarios;
      console.log(this.usuariosCadastrados);
    });
  }

  realizarLogin(){

    console.log("dentro da funcao");

    this.usuarioLogado = this.usuariosCadastrados.filter(usuario => usuario.email === this.loginUsuario.email);

    console.log(this.usuarioLogado);

    if(this.usuarioLogado.length === 0 || this.usuarioLogado === null || this.usuarioLogado === undefined){
      console.log("dentro do if 1");
      console.log(this.msgEmailInvalido);
      return;
    }

    else{

      console.log("dentro do else");
  for(var i=0; i< this.usuarioLogado.length; i++){
    if(this.usuarioLogado[i].senha1 === this.loginUsuario.senha1){

      this.router.navigate(['/tabs/tab1']);
    }
    else{
      console.log("Senha inválida")
    }
  }
    }

  }

}
