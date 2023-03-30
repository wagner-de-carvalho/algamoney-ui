import { Component } from '@angular/core';
import { PessoaFiltro, PessoaService } from '../pessoa.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  constructor(private pessoaService: PessoaService) { }
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];

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
}
