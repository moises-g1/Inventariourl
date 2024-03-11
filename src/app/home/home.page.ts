import { Producto } from 'src/app/interfaces/common.interfaces';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  category: string = 'camisa';

  camisa: Producto[] = [];
  vestido: Producto[] = [];
  pantalon: Producto[] = [];
  blusa: Producto[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productS: ProductService,
  ) {
    this.productS.getProducts().subscribe(
      (productos: Producto[]) => {
        this.camisa = productos.filter(producto => producto.tipo === 'camisa');
        this.vestido = productos.filter(producto => producto.tipo === 'vestido');
        this.pantalon = productos.filter(producto => producto.tipo === 'pantalon');
        this.blusa = productos.filter(producto => producto.tipo === 'blusa');
        // Puedes filtrar los productos según su tipo para otras categorías aquí
        console.log(this.blusa);
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  getBlusas() {

}


  addProduct() {
    this.router.navigate(['/add-product'], { relativeTo: this.activatedRoute });


  }

  addUser() {
    this.router.navigate(['/add-user'], { relativeTo: this.activatedRoute });

  }

}
