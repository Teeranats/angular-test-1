import { Component, EventEmitter, Input } from '@angular/core';
import { ShereService } from "../../services/shere.service";
@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})

export class SaleAmountComponent {

  constructor(private service: ShereService) {
    
  }


  dataEvent = new EventEmitter<any>();
  @Input() data:String = ""
  total_of_tax: String = "";
  value_tax: String = "";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("this.total_of_tax ===",this.total_of_tax);
    console.log("value_tax ===",this.value_tax);
    
    this.no_comma
    
  }
  emitData() {
    this.dataEvent.emit(this.value_tax);
  }
  onKey(event:any) {const inputValue = event.target.value;
    console.log("oney");
    this.data = this.value_tax
    
  this.no_comma(inputValue)
  // this.value_tax = this.commaSeparateNumber(inputValue)
   
  }
  no_comma(value:any){
    let s = value
    s = s.replace(/,/g, '');
    this.value_tax = s;
    this.service.sendMessage(s);
    
  }
  commaSeparateNumber(val: any) {
    // remove sign if negative
    var sign = 1;
    if (val < 0) {
      sign = -1;
      val = -val;
    }

    // trim the number decimal point if it exists
    let num = val.toString().includes('.') ? val.toString().split('.')[0] : val.toString();

    while (/(\d+)(\d{3})/.test(num.toString())) {
      // insert comma to 4th last position to the match number
      num = num.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }

    // add number after decimal point
    if (val.toString().includes('.')) {
      num = num + '.' + val.toString().split('.')[1];
    }

    // return result with - sign if negative
    return sign < 0 ? this.total_of_tax =  '-' + num :this.total_of_tax = num;
  }
}
