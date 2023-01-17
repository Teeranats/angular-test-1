import { Component } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent {
  onChange(data:any){
    console.log(data.target.value);
    // this.service.type_filing = data.target.value

    
  }
}
