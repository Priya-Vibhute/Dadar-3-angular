import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obervables',
  imports: [],
  templateUrl: './obervables.component.html',
  styleUrl: './obervables.component.css'
})
export class ObervablesComponent {

  data=[];

 observable= new Observable((observer)=>{
     observer.next(23);
     observer.next(74);
     observer.next(12);
     observer.next(10);
     observer.next(9);
  })

  getData1()
  {
    this.observable.subscribe({
      next:(value)=>{
        console.log(value)
      },
      error:(err)=>{},
      complete:()=>{}
    })
  }

}
