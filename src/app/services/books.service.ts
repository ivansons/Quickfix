import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public searchedBooks: any[] = [];
  public products: any;
  public cart: any[] = [];
  public bookTypes:any;
  constructor(public http: HttpClient) {
    console.log("Hello service provider");
    this.readProduct()
      .then(data => {
        console.log(data);
      });

      this.getBookTypes();
  }


  readProduct() {
    return new Promise(resolve => {
      this.http.get("assets/works.json").
        pipe(map(
          (response) => response
        )).
        subscribe(
          (data) => {
            {
              this.products = data;
              resolve(this.products);
            }
          }
        )

    });
  }
  search(item) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + item + "&maxResults=20");
  }

  addToCart(book) {
    this.cart.push(book);
    console.log(this.cart);
  }
  getBookTypes(){
    this.http.get('https://cors-anywhere.herokuapp.com/http://72.249.48.96/~dmppeytr/api/types?_format=json').subscribe(res=>{
    this.bookTypes=res;
    console.log('Got Book Types=',res);
    });
  }
}
