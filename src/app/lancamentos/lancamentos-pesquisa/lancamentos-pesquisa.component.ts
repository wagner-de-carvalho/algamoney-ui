import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid: any;


  ngOnInit(): void {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const first = event.first == undefined ? 1 : event.first;
    const rows = event.rows == undefined ? 1 : event.rows;
    const pagina = first / rows;
    this.pesquisar(pagina);
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.grid.reset();
        this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' })
      })
      .catch((err) => err)
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    })
  }

}
