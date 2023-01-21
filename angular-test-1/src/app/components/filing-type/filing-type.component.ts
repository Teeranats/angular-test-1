import { Component } from '@angular/core';
import { ShereService } from "../../services/shere.service";

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent {

  constructor(private service: ShereService){

  }

  type1:string = '0';
  onChange(data:any){
    this.type1 = data.target.value
    console.log(this.type1);
    this.service.sendFillingType(this.type1)
  }
}
