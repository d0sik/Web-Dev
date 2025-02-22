import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() removed = new EventEmitter();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.removed.emit(this.product.id);
  }
}
