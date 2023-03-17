import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history-selector',
  templateUrl: './history-selector.component.html',
  styleUrls: ['./history-selector.component.css'],
})
export class HistorySelectorComponent {
  @Input() searchHistory: string[] = [];
  @Input() currentCity: string = '';
  @Output() onSelect = new EventEmitter<string>();
  offset = 0;

  handleClick(city: string) {
    this.onSelect.emit(city);
  }

  forward() {
    if (this.offset > 0) this.offset -= 70;
  }

  backward() {
    if (this.offset < 1200) this.offset += 70;
  }
}
