import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BlockService } from 'src/app/services/block.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Email } from '../../models/email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit, OnDestroy {
  form?: FormGroup

  constructor(public loadingService: LoadingService, public blockService: BlockService, private formBuilder: FormBuilder, private emailService: EmailService,
    private subscriptionService: SubscriptionService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscriptionService.cleanSubscriptions();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      senderName: ['', Validators.required],
      senderEmail: ['', [Validators.required, Validators.email]],
      emailSubject: ['', Validators.required],
      emailContent: ['', Validators.required]
    });
  }

  public isFormInvalid(): boolean {
    return this.form!.invalid;
  }

  public onSubmit(): void {
    if (this.form!.valid) {
      this.sendMail();
    }
  }

  private resetFields(): void {
    this.form!.reset();
  }

  private sendMail(): void {
    this.loadingService.displayLoading();
    this.blockService.blockComponent();
    const subscription$ = this.emailService.sendMail(this.generateMail()).subscribe({
      next: () => {
        this.loadingService.hiddenLoading();
        this.blockService.unblockComponent();
        this.displayMessage('success', 'Sucesso no Envio', 'O e-mail foi enviado com sucesso, em breve entraremos em contato');
        this.resetFields();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loadingService.hiddenLoading();
        this.blockService.unblockComponent();
        this.displayMessage('error', 'Fracasso no Envio', 'Não foi possível enviar o e-mail, tente novamente mais tarde')
      }

    });
    this.subscriptionService.saveSubscription(subscription$);
  }

  private generateMail(): Email {
    return { senderName: this.form!.get('senderName')!.value, senderEmail: this.form!.get('senderEmail')!.value, emailSubject: this.form!.get('emailSubject')!.value, emailContent: this.form!.get('emailContent')!.value }
  }

  private displayMessage(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail });
  }

  public hiddenMessage(): void {
    this.messageService.clear();
  }
}
