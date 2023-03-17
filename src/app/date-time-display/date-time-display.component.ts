import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-display',
  templateUrl: './date-time-display.component.html',
  styleUrls: ['./date-time-display.component.css'],
})
export class DateTimeDisplayComponent implements OnInit {
  @Input() time: number | null = null;
  timeString = '';
  dateString = '';
  weekday = '';

  ngOnInit() {
    if (this.time) {
      const newDate = new Date(this.time * 1000);
      this.timeString = newDate.toLocaleTimeString();
      this.dateString = newDate.toLocaleDateString();
      this.weekday = newDate.toLocaleDateString('en-US', { weekday: 'long' });
    }
  }
}
