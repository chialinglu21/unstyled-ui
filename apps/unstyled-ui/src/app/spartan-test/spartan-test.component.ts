import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrnAccordionContentComponent} from '@spartan-ng/ui-accordion-brain';
import { HlmAccordionContentDirective, HlmAccordionDirective, HlmAccordionIconDirective, HlmAccordionItemDirective, HlmAccordionTriggerDirective } from '@spartan-ng/ui-accordion-helm';
import {HlmIconComponent} from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-spartan-test',
  standalone: true,
  imports: [CommonModule, BrnAccordionContentComponent, HlmAccordionContentDirective, HlmAccordionDirective, HlmAccordionIconDirective, HlmAccordionItemDirective, HlmAccordionTriggerDirective, HlmIconComponent],
  template: `
  <div hlmAccordion>
            <div hlmAccordionItem>
                <button hlmAccordionTrigger>
                    Is it accessible?
                    <hlm-icon hlmAccIcon />
                </button>
                <brn-accordion-content hlm>Yes. It adheres to the WAI-ARIA design pattern.</brn-accordion-content>
            </div>

            <div hlmAccordionItem>
                <button hlmAccordionTrigger>
                    Is it styled?
                    <hlm-icon hlmAccIcon />
                </button>
                <brn-accordion-content hlm>
                    Yes. It comes with default styles that match the other components' aesthetics.
                </brn-accordion-content>
            </div>

            <div hlmAccordionItem>
                <button hlmAccordionTrigger>
                    Is it animated?
                    <hlm-icon hlmAccIcon />
                </button>
                <brn-accordion-content hlm>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </brn-accordion-content>
            </div>
        </div>
  `,
  styles: `
    :host {
      // display: block;
    }
  `,
})
export class SpartanTestComponent {}
