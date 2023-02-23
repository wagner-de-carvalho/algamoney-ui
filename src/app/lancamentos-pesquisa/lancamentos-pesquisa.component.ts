import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '28/02/2023',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/02/2023',
      dataPagamento: '09/02/2023', valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/03/2023',
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: '05/02/2023',
      dataPagamento: '30/05/2023', valor: 800, pessoa: 'Escola Abelha Rainha'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: '18/03/2023',
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza'
    },
    {
      tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '10/03/2023',
      dataPagamento: '09/07/2023', valor: 1750, pessoa: 'Casa Nova Imóveis'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '13/03/2023',
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
  ];

}
