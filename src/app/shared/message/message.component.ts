import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" severity="error" class="p-message p-message-error">
      {{ text }}
    </div>
  `,
  styles: [],
})
export class MessageComponent {
  @Input() error: string = '';
  @Input() control?: AbstractControl | FormControl | null;
  @Input() text: string = '';

  temErro(): boolean {
    return this.control
      ? this.control.hasError(this.error) && this.control.dirty
      : true;
  }
}
