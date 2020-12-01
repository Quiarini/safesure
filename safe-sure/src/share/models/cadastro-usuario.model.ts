
export class CadastroUsuario {

    constructor(
     public CPF: string = '',
     public nome: string = '',
     public sobrenome: string = '',
     public telefone: string[] = [''],
     public email: string = '',
     public senha1: string = '',
     public senha2: string = '',
     public cep: string = '',
     public endereco: string = '',
     public complemento: string = '',
     public numero: string = '',
    ){}
}