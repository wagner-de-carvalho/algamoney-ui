import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    CurrencyMaskModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    SelectButtonModule,
    TableModule,
    TooltipModule,
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
