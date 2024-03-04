import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const APIURL= ''

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getPtoducts(cat: string = 'Beef'){
    return this.http.get(`${APIURL}filter.php?c=${cat}`)
  }

  addProduct(){
    return this.http.get(`${APIURL}categories.php`)
  }

  getComida(){
    return this.http.get(`${APIURL}filter.php?c=Beef`)
  }
  getByArea(cat: string = 'Chinese'){
    return this.http.get(`${APIURL}filter.php?a=${cat}`)
  }

  getArea(){
    return this.http.get(`${APIURL}areas.php`)
  }


  getIngredientes(){
    return this.http.get(`${APIURL}list.php?i=list`)
  }


  

}

