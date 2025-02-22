import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() removed = new EventEmitter();

  removeProduct(productID: number) {
    this.removed.emit(productID);
  }
}
