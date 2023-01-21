import { Component } from '@angular/core';
import { ShereService } from "../../services/shere.service";

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent {

  receivedMessage: string = '';

  constructor(private service: ShereService) {
    this.service.currentMessage.subscribe(message => this.receivedMessage = message);
  }
  
  total_of_tax: String = "";
  value_tax: String = "";
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // let convertt = this.convert()
    // console.log(convertt);
    // console.log("this.total_of_tax ===",this.total_of_tax);
    // console.log("value_tax ===",this.value_tax);
    
    // this.no_comma
    
  }
  onKey(event:any) {const inputValue = event.target.value;
    console.log("oney");
    // this.value_tax = this.service.total_vat;
    
  this.no_comma(inputValue)
  // this.value_tax = this.commaSeparateNumber(inputValue)
   
  }
  no_comma(value:any){
    let s = value
    s = s.replace(/,/g, '');
    // this.value_tax = s
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

  convert() {
    let number = 300000 / 4
    let float = Math.round((number + Number.EPSILON) * 100) / 100
    console.log("number == ", number);
    console.log("commaa = = = ",this.commaSeparateNumber(float));
    this.total_of_tax = this.commaSeparateNumber(float)
    return this.commaSeparateNumber(float)

  }
 
}
