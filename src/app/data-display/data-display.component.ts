import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent {
  @Input() days: any;
  @Input() currentCity: string = '';
  @Input() searchHistory: string[] = [];
  @Output() onClear = new EventEmitter();
  @Output() onSelect = new EventEmitter<string>();
}
