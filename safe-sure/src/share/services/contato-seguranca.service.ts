import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoSeguranca } from '../models/contato-seguranca.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoSegurancaService {

  url = './assets/documents/contatos-seguranca.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getContatosSeguranca(): Observable<ContatoSeguranca[]>{

    return this.httpClient.get<ContatoSeguranca[]>(this.url);
  }
}
