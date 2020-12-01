import { CadastroUsuario } from 'src/share/models/cadastro-usuario.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  url = './assets/documents/usuarios.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsuariosCadastrados(): Observable<CadastroUsuario[]>{

    return this.httpClient.get<CadastroUsuario[]>(this.url);
  }
}
