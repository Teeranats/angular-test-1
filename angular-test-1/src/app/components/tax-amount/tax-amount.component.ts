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
    console.log("onkey");
    // this.value_tax = this.service.total_vat;
    
  this.no_comma(inputValue)
  // this.value_tax = this.commaSeparateNumber(inputValue)
   
  }
  no_comma(value:any){
    let s = value
    s = s.replace(/,/g, '');
    // this.value_tax = s
  }

}
