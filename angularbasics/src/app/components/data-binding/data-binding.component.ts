import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name="Nisha"
  age=19
  color='green'
  alignment="center"
  schoolName="Daffodils school"

  displayMessage()
  {
    alert("Event Binding")
  }

  // changeAlignment("left")
  changeAlignment(value:string)
  {
     this.alignment=value;
  }


}
