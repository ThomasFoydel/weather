import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  city = '';
  @Output() dataFetched = new EventEmitter<any>();

  async onSubmit() {
    const API_KEY = '5edaf9af814e0a53bb982ef8b401101a';
    const latLonUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${API_KEY}`;
    try {
      const latLonResponse = await fetch(latLonUrl);
      if (!latLonResponse.ok) throw new Error(latLonResponse.statusText);
      const [latLonData] = await latLonResponse.json();
      if (!latLonData) throw new Error('No lat lon data found');

      const { lat, lon } = latLonData;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const weatherResponse = await fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error(weatherResponse.statusText);
      const weatherData = await weatherResponse.json();
      const { list } = weatherData;

      const days: any[] = [];
      for (let i = 0; i < list.length; i++) i % 8 === 0 && days.push(list[i]);
      this.dataFetched.emit(days);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}
