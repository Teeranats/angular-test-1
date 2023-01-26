import { Component } from '@angular/core';
import { ShereService } from './services/shere.service';
ShereService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-1';
  typeFilling = '0'
  // selectedValue:string = 'kkk';
  constructor(private service : ShereService){    
    this.service.currentfilling.subscribe(data => this.typeFilling = data
    );

    this.service.currentYear.subscribe(data => console.log("year from service",data)
    );
    console.log('====================================');
    console.log(this.typeFilling);
    console.log('====================================');
  }
  
    
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    
    
  }

  // chang(data:any){
  //   this.data = data
  // }
}
