import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent {
  @Input() days: any;
  @Input() city: string = '';
}
