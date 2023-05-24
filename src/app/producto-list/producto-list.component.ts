import { Component } from '@angular/core';
import { ProductosService } from "../producto/productos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent {
  productos: any[] = [];
  selectedProducto: any;

  constructor(private productosService: ProductosService, private router: Router) {
    this.productos = this.productosService.productos;
  }

  createProducto() {
    this.productosService.selectedProducto = null;
    this.router.navigate(['producto']);
  }

  editProducto(producto: any) {
    this.productosService.selectedProducto = producto;
    this.router.navigate(['producto']);
  }

  deleteProducto(id: number) {
    this.productosService.deleteProducto(id);
    console.log(this.productosService.productos);
  }
}
