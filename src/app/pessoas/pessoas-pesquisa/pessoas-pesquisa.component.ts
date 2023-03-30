import { Component, ViewChild } from '@angular/core';
import { PessoaFiltro, PessoaService } from '../pessoa.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  constructor(
    private pessoaService: PessoaService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService, // Componente Toast
  ) { }

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];
  @ViewChild('tabela') grid: any;

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      })
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const first = event.first == undefined ? 1 : event.first;
    const rows = event.rows == undefined ? 1 : event.rows;
    const pagina = first / rows;
    this.pesquisar(pagina);
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.grid.reset();
        this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    })
  }

  alternarStatus(pessoa: any): void {
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        pessoa.ativo = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Pessoa ${acao} com sucesso!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
