import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';

import { SendEmailComponent } from './components/send-email/send-email.component';
import { EmailRoutingModule } from './email-routing.module';
import { EmailService } from './services/email.service';


@NgModule({
  declarations: [
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmailService]
})
export class EmailModule { }
