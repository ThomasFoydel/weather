import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentCity = '';
  searchHistory: string[] = [];
  days: any[] = [];

  updateHistory(city: string) {
    if (this.searchHistory.length === 10) {
      this.searchHistory = this.searchHistory.slice(1)
    }
    if (this.searchHistory.includes(city)) {
      this.searchHistory = this.searchHistory.filter((c) => c !== city);
    }
    this.searchHistory.push(city);
    const stringified = JSON.stringify(this.searchHistory);
    localStorage.setItem('cities', stringified);
  }

  ngOnInit() {
    const saved = localStorage.getItem('cities') || '[]';
    const parsed = JSON.parse(saved);
    this.searchHistory = parsed;
  }

  async onSubmit(city: string) {
    const API_KEY = '5edaf9af814e0a53bb982ef8b401101a';
    const latLonUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    try {
      const latLonResponse = await fetch(latLonUrl);
      if (!latLonResponse.ok) throw new Error(latLonResponse.statusText);
      const [latLonData] = await latLonResponse.json();
      if (!latLonData) throw new Error('No lat lon data found');

      const { lat, lon } = latLonData;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
      const weatherResponse = await fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error(weatherResponse.statusText);
      const weatherData = await weatherResponse.json();
      const { list } = weatherData;

      const days: any[] = [];
      for (let i = 0; i < list.length; i++) i % 8 === 0 && days.push(list[i]);
      this.days = days;
      this.updateHistory(city);
      this.currentCity = city;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}
