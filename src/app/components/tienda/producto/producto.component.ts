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


  galeria: Array<any> = [];
  renderGaleria: Boolean = true;
  currentImg: string | undefined;

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
    this.currentImg = this.producto.imageUrl[0]; 
  },
  error:(err:any)=> {
    console.log(err)
  }
  })
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }

  handleChangeImg(itemImg: string){
    this.currentImg = itemImg;
  }
}
