import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LoadingService {
  private isLoading?: boolean;

  constructor() { this.isLoading = false; }

  public getIsLoading(): boolean {
    return this.isLoading!;
  }

  public displayLoading(): void {
    this.isLoading = true;
  }

  public hiddenLoading(): void {
    this.isLoading = false;
  }
}
