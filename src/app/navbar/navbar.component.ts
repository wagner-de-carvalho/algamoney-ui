import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  exibindoMenu = false;
  usuarioLogado: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.auth.jwtPayload?.nome;
  }

  temPermissao(permissao: string) {
    return this.auth.temPermissao(permissao);
  }

  criarNovoAccessToken() {
    this.auth.obterNovoAccessToken();
  }

  logout() {
    this.auth
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }
}
