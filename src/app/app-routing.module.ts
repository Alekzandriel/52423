import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from "./producto/producto.component";
import { ProductoListComponent } from "./producto-list/producto-list.component";


const routes: Routes = [
  {
    path: 'producto',
    component: ProductoComponent
  },

  {
    path: 'producto-list',
    component: ProductoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
