import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { BooksService } from 'src/app/services/books.service';
import { FormPage } from '../form/form.page';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  public book:any;
  constructor(public modalController: ModalController,navParams: NavParams,public bookApi:BooksService) {
    this.book=navParams.get('bookDetail');
    console.log(navParams.get('bookDetail'));
   }

  ngOnInit() {
  }
 async add(book) {
    const modal = await this.modalController.create({
      component: FormPage,
      componentProps: {
        'bookDetail': book
      },
      mode: 'ios'
    });
    return await modal.present();
 /*    this.modalController.dismiss();
    this.bookApi.addToCart(book); */
  }
}
