import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly emailUrl: string = `${environment.apiUrl}/emails`

  constructor(private httpClient: HttpClient) { }

  public sendMail(email: Email): Observable<Email> {
    return this.httpClient.post(this.emailUrl, email);
  }
}
