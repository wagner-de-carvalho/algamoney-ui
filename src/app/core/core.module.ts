import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import localePt from '@angular/common/locales/pt';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfirmDialogModule,
    ToastModule
  ],
  exports: [NavbarComponent, ToastModule, ConfirmDialogModule],
  providers: [
    ConfirmationService,
    DatePipe,
    ErrorHandlerService,
    LancamentoService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
