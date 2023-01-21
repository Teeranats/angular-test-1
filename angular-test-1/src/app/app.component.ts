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
  // selectedValue:string = 'kkk';
  constructor(private service : ShereService){    
    this.service.currentfilling.subscribe(data => console.log("type filling from service",data)
    );

    this.service.currentYear.subscribe(data => console.log("year from service",data)
    );}
  
    
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    
    
  }

  // chang(data:any){
  //   this.data = data
  // }
}
