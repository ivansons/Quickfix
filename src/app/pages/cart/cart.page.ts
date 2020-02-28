import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public temp: any[] = [];
  constructor(public bookApi: BooksService, private papa: Papa, ) { }

  ngOnInit() {
  
    for (let i = 0; i < this.bookApi.cart.length; i++) {
      const raw ={
        ItemNo:i,
        ISBN_ISSN:this.bookApi.cart[i]['material_info'].industryIdentifiers[0].identifier,
        Title:this.bookApi.cart[i]['material_info'].title,
        Publisher:this.bookApi.cart[i]['material_info'].publisher,
        Author1:this.bookApi.cart[i]['material_info'].authors,
        Author2:this.bookApi.cart[i]['material_info'][1] ? this.bookApi.cart[i]['bookDetail'][1] :"-",
        Author3:this.bookApi.cart[i]['material_info'][2] ? this.bookApi.cart[i]['bookDetail'][2] :"-",
        Author4:this.bookApi.cart[i]['material_info'][3] ? this.bookApi.cart[i]['bookDetail'][3] : "-",
        Pages: this.bookApi.cart[i]['material_info'].pageCount,

      };
      this.temp.push(raw);
    }
  }


  download() {
    console.log(this.temp);

    let csv = this.papa.unparse(
      this.temp
    );

    var blob = new Blob([csv]);
    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'CartData.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
