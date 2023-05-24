import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from "./productos.service";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})

export class ProductoComponent {
  nombre: string = '';
  precio: number = 0;
  fProduccion: Date = new Date();
  fCaducidad: Date = new Date();
  descripcion: string = '';
  tienda: string = '';
  marca: string = '';
  clasificacion: string = '';
  color: string = '';
  state: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder,
    private productosService: ProductosService) {
    if (this.productosService.selectedProducto) {
      this.form = formBuilder.group({
        id: [this.productosService.selectedProducto.id],
        nombre: [this.productosService.selectedProducto.nombre, [Validators.required, Validators.minLength(3)]],
        precio: [this.productosService.selectedProducto.precio, [Validators.min(1)]],
        fProduccion: [this.productosService.selectedProducto.fProduccion],
        fCaducidad: [this.productosService.selectedProducto.fCaducidad],
        descripcion: [this.productosService.selectedProducto.descripcion, [Validators.required, Validators.minLength(20)]],
        tienda: [this.productosService.selectedProducto.tienda, [Validators.minLength(5)]],
        marca: [this.productosService.selectedProducto.marca, [Validators.required, Validators.minLength(5)]],
        clasificacion: [this.productosService.selectedProducto.marca, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
        color: [this.productosService.selectedProducto.color, [Validators.minLength(5), , Validators.maxLength(15)]],
        state: [this.productosService.selectedProducto.state, []],
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        precio: [0, [Validators.min(1)]],
        fProduccion: [new Date()],
        fCaducidad: [new Date()],
        descripcion: ['', [Validators.required, Validators.minLength(20)]],
        tienda: ['', [Validators.minLength(5)]],
        marca: ['', [Validators.required, Validators.minLength(5)]],
        clasificacion: [Validators.minLength(2), Validators.maxLength(15)],
        color: ['', Validators.minLength(5), Validators.maxLength(15)],
        state: [false, []],
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.addProducto();
    } else {
      alert('Formulario No Valido');
    }
  }

  addProducto() {
    this.productosService.addProducto(this.form.value);
    console.log(this.productosService.productos);
  }

  updateProducto() {
    this.productosService.updateProducto(this.idField.value, this.form.value);
    console.log(this.productosService.productos);
  }

  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }
}
