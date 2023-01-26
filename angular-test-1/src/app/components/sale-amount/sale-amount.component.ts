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
    let cal = Number(s);
    let fixFloat = cal.toFixed(2)
    let floatToNum = Number(fixFloat) * 0.07
    this.service.sendMessage(floatToNum);
  }
}
