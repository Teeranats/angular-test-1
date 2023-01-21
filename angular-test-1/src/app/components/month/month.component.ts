import { Component } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {

  months :string[] = [
    'January','February','March','April',"May ","June","July","August","September","October","November","December"
  ]
  selectedValue: string = 'January';
  selectOption(value: any) {
    this.selectedValue = value;
  }
}
