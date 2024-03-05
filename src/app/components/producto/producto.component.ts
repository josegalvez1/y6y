import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit, OnDestroy {
  slug: string | undefined;
  producto: Producto | undefined;
  productoSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) { }
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id']
console.log(this.route)
this.productoSub= this.productoService.getProducto()
.subscribe({
  next:(producto:Producto[])=>{
    this.producto = producto.filter(p=> p.slug === this.slug)[0];
    console.log(this.producto);
  },
  error:(err:any)=> {
    console.log(err)
  }
  })
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
