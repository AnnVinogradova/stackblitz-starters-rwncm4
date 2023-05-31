import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  template: `

    <app-child></app-child>
  `,
})
export class App {
  name = 'Imminence';
}

bootstrapApplication(App);
