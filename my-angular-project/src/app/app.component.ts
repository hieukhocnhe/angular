import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'my-angular-project';
  products: Array<{ id: number; name: string; price: number }> = [
    { id: 1, name: 'Product 1', price: 12 },
    { id: 2, name: 'Product 2', price: 12 },
    { id: 3, name: 'Product 3', price: 12 },
  ];
  onDelete(id: number) {
    this.products = this.products.filter((product) => product.id != id);
  }
}
