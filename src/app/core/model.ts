export class Categoria {
  codigo?: number;
  nome?: string;
}

export class Pessoa {
  codigo?: number;
  nome?: string;
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
