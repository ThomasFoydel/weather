import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather';
  citySearched = '';
  days = [];

  onDataFetched(data: any) {
    this.days = data;
  }

  onCitySearched(city: string) {
    this.citySearched = city;
  }
}
