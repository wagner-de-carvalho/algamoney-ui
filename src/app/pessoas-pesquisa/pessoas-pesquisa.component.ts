import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    {
      nome: 'John Connor', cidade: 'Cidade Alta', estado: 'Tantrum',
      ativo: true
    },
    {
      nome: 'Conan o Bárbaro', cidade: 'Sagaz', estado: 'Hiperbórea',
      ativo: false
    },
    {
      nome: 'Jaspion Fantástico', cidade: 'Goss', estado: 'Daileon',
      ativo: false
    },
    {
      nome: 'Mcgiver Perigo', cidade: 'York', estado: 'Gallia',
      ativo: false
    },
    {
      nome: 'Soul Brain', cidade: 'Tulipa', estado: 'Maza',
      ativo: true
    },
    {
      nome: 'Nosferatus Draco', cidade: 'Dracônia', estado: 'Damia',
      ativo: true
    },
    {
      nome: 'Compositor Verde', cidade: 'Traíra', estado: 'Amalta',
      ativo: false
    },
    {
      nome: 'Fero Braz', cidade: 'Cais', estado: 'Ceuta',
      ativo: true
    }
  ];
}
