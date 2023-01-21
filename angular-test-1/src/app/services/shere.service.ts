import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShereService {

  private fillingType = new Subject<any>();
  currentfilling = this.fillingType.asObservable();

  private messageSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();

  private month = new Subject<any>();
  currentMonth = this.month.asObservable();

  private year = new Subject<any>();
  currentYear = this.year.asObservable();

  sendFillingType(type:string){
    this.fillingType.next(type)
  }
  sendMessage(message: Number) {
    this.messageSource.next(message);
  }
  sendMonth(month:string){
    this.month.next(month)
  }
  sendYear(year:string){
    this.year.next(year)
  }

}
