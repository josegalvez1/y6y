import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl:string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

getProducto(): Observable<Producto[]>{ //Se hace opbservable despues de hacer el modelo
  return this.http.get<Producto[]>(`${this.ApiUrl}`);
}

}
