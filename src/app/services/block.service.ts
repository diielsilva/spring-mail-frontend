import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class BlockService {
  private isBlocked?: boolean;
  constructor() { this.isBlocked = false; }

  public getIsBlocked(): boolean {
    return this.isBlocked!;
  }

  public blockComponent(): void {
    this.isBlocked = true;
  }

  public unblockComponent(): void {
    this.isBlocked = false;
  }
}
