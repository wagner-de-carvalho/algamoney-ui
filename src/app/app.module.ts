import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentoService } from './lancamentos/lancamento.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    LancamentosModule,
    PessoasModule,
    ToastModule,
  ],
  providers: [LancamentoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
