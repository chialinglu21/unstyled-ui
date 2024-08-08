import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tailwindcss-test',
  standalone: true,
  imports: [CommonModule],
  template: `<button class="w-64 text-orange-600">test tailwindcss</button>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TailwindcssTestComponent {}
