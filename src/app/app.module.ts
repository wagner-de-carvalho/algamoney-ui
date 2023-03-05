import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NgModule } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { NavbarComponent } from './navbar/navbar.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { MessageComponent } from './message/message.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    MessageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    LancamentosModule,
    SelectButtonModule,
    TableModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
