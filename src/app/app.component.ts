import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  updatedAt: number | undefined;

  clear() {}

  increase() {
    this.setDate();
  }

  decrease() {
    this.setDate();
  }

  private setDate(): void {
    this.updatedAt = Date.now();
  }
}
