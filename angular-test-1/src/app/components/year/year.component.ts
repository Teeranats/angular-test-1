import { Component } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent {

  selectedValue: string = '2020';
  selectOption(value: any) {
    this.selectedValue = value;
  }
}
