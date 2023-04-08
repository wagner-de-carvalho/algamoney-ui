import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../core/model';
import { environment } from '../environments/environment';

export class PessoaFiltro {
  nome?: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  pessoasUrl: string;

  constructor(private http: HttpClient) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
  }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    let params = new HttpParams();
    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.itensPorPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http
      .get(`${this.pessoasUrl}?resumo`, { params })
      .toPromise()
      .then((response: any) => {
        const pessoas = response['content'];

        const resultado = {
          pessoas,
          total: response.totalElements,
        };
        return resultado;
      })
      .catch((err) => err);
  }

  excluir(codigo: number): Promise<void | null> {
    return this.http
      .delete(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa | any> {
    return this.http.post<Pessoa>(this.pessoasUrl, pessoa).toPromise();
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void | any> {
    return this.http
      .put(`${this.pessoasUrl}/${codigo}/ativo`, ativo)
      .toPromise();
  }

  listarTodas(): Promise<any> {
    return this.http
      .get(`${this.pessoasUrl}?resumo`)
      .toPromise()
      .then((response: any) => response['content'])
      .catch((err) => err);
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa | any> {
    return this.http
      .put<Pessoa>(`${this.pessoasUrl}/${pessoa.codigo}`, pessoa)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa | any> {
    return this.http.get<Pessoa>(`${this.pessoasUrl}/${codigo}`).toPromise();
  }
}
