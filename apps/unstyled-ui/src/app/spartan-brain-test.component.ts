import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrnAccordionModule } from '@spartan-ng/ui-accordion-brain';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-spartan-brain-test',
  standalone: true,
  imports: [CommonModule, BrnAccordionModule, HlmIconComponent],
  template: `

  <div brnAccordion [type]="'single'">
            <div brnAccordionItem>
                <button brnAccordionTrigger>
                    Is it accessible?
                </button>
                <brn-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</brn-accordion-content>
            </div>
            <div brnAccordionItem>
                <button brnAccordionTrigger>
                    Is it styled?
                </button>
                <brn-accordion-content>
                    Yes. It comes with default styles that match the other components' aesthetics.
              </brn-accordion-content>
            </div>

        </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SpartanBrainTestComponent {}
