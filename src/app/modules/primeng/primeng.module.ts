import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ToolbarModule, PanelModule, InputTextModule, InputTextareaModule, ButtonModule, ProgressSpinnerModule, BlockUIModule, ToastModule]
})
export class PrimengModule { }
