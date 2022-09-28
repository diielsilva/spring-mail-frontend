import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class SubscriptionService {
  subscriptions$?: Subscription[];

  constructor() { this.subscriptions$ = [] }

  public saveSubscription(subscription$: Subscription): void {
    this.subscriptions$!.push(subscription$);
  }

  public cleanSubscriptions(): void {
    this.subscriptions$!.map(subscription$ => subscription$.unsubscribe());
    this.resetSubscriptionArray();
  }

  private resetSubscriptionArray(): void {
    this.subscriptions$ = [];
  }
}
