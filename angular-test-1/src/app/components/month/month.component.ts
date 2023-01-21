import { Component } from '@angular/core';
import { ShereService } from "../../services/shere.service";

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {

  constructor(private service: ShereService){

  }

  months :string[] = [
    'January','February','March','April',"May ","June","July","August","September","October","November","December"
  ]
  selectedValue: string = 'January';
  selectOption(value: any) {
    this.selectedValue = value;
    this.service.sendMonth(value)
  }
}
