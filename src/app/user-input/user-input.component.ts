import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  city = '';
  @Output() citySearched = new EventEmitter<any>();

  onSubmit() {
    this.citySearched.emit(this.city);
    this.city = '';
  }
}
