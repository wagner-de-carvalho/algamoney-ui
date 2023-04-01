export class Categoria {
  codigo?: number;
  nome?: string;
}

export class Endereco {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
}

export class Pessoa {
  codigo?: number;
  nome?: string;
  endereco: Endereco = new Endereco();
  ativo = true;
}

export class Lancamento {
  codigo?: number;
  tipo: string = 'RECEITA';
  descricao?: string;
  dataVencimento?: Date;
  dataPagamento?: Date;
  valor?: number;
  observacao?: string;
  pessoa: Pessoa = new Pessoa();
  categoria: Categoria = new Categoria;
}
