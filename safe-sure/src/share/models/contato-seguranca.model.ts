
export class ContatoSeguranca {

    constructor(
     public CPF: string = '',
     public nome: string = '',
     public sobrenome: string = '',
     public telefone: string[] = [''],
     public email: string[] = [''],
     public msghelp: string = '',
     public data: string = '',
     public localizacao: string = '',
    ){}
}