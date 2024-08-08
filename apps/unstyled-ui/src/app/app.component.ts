import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SpartanTestComponent } from './spartan-test/spartan-test.component';
import { TailwindcssTestComponent } from './tailwindcss-test.component';
import { SpartanBrainTestComponent } from './spartan-brain-test.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SpartanTestComponent, SpartanBrainTestComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'unstyled-ui';
}
