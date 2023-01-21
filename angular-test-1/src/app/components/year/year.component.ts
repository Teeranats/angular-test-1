import { Component } from '@angular/core';
import { ShereService } from '../../services/shere.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss'],
})
export class YearComponent {
  selectedValue: string = '';
  constructor(private service: ShereService) {}

  selectOption(value: any) {
    this.selectedValue = value;
    this.service.sendYear(value);
  }
}
