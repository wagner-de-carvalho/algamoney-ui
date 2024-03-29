import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    //private messageService: MessageService, // Componente Toast
    private router: Router
  )
  { }

  ngOnInit(): void {}

  login(usuario: string, senha: string) {
    this.auth
      .login(usuario, senha)
      .then(() => { 
        this.router.navigate(['/lancamentos']);
      })
      .catch((erro) => {
        this.errorHandler.handle(erro);
      });
  }
  
}

