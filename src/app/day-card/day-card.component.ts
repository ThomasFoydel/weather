import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css'],
})
export class DayCardComponent {
  @Input() day: any;
}
