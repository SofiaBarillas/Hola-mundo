import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';
  contador= 0;
  constructor (){}
  onkey (event:any){
    this.contador=event.target.value.length
  }
}
