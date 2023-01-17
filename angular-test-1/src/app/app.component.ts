import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-1';
  selectedValue:string = 'kkk';
  items = ['Item 1', 'Item 2', 'Item 3'];

  // chang(data:any){
  //   this.data = data
  // }
}
