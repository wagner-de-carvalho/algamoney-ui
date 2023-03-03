import { Component, Input } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" severity="error" class="p-message p-message-error">
      {{ text }}
    </div>
  `,
  styles: []
})
export class MessageComponent {
  @Input() error: string = '';
  @Input() control: FormControl<NgModel> = new FormControl;
  @Input() text: string = '';

  temErro():boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
