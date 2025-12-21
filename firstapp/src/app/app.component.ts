import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./components/product/product.component";
import { Category } from "./components/category/category.component";
import { RegisterComponent } from "./components/register/register.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product, Category, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
