import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  city = '';
  country = '';

  onSubmit() {
    console.log('Form submitted:', this.city, this.country);
  }
}
