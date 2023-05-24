import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: any[] = [];
  selectedProducto: any = null;

  constructor() {
    this.loadProductos();
  }

  private loadProductos() {
    this.productos = [];
    this.productos.push(
      {id: 1, nombre: 'raqueta', precio: 20, fProduccion: '1990-01-01',fCaducidad: '1990-01-01', descripcion: 'raqueta de tennis', tienda: 'maratonSports', marca: 'Tennisports', clasificacion: 'deportivo', color: 'blanco', state: true},
      {id: 1, nombre: 'raqueta', precio: 20, fProduccion: '1990-01-01',fCaducidad: '1990-01-01', descripcion: 'raqueta de tennis', tienda: 'maratonSports', marca: 'Tennisports', clasificacion: 'deportivo', color: 'blanco', state: true},
      {id: 1, nombre: 'raqueta', precio: 20, fProduccion: '1990-01-01',fCaducidad: '1990-01-01', descripcion: 'raqueta de tennis', tienda: 'maratonSports', marca: 'Tennisports', clasificacion: 'deportivo', color: 'blanco', state: true},
     
    );
  }

  addProducto(payload: any) {
    this.productos.push(payload);
  }

  updateProducto(id: number, payload: any) {
    const index = this.productos.findIndex(producto => producto.id === id);
    this.productos[index] = payload;
  }

  deleteProducto(id: number) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index > -1) {
      this.productos.splice(index, 1);
    }
  }
}
