import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ModalController } from '@ionic/angular';
import { BookPage } from '../book/book.page';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormPage } from '../form/form.page';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public searchText: any;
  data: any;

  constructor(public accountApi: AccountService,public router: Router, public toastController: ToastController, public bookApi: BooksService, public modalController: ModalController) { }

  ngOnInit() {
    fetch('./assets/works.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
    });
  }


  search() {
    this.bookApi.searchedBooks = [];
    console.log(this.searchText)
    this.bookApi.search(this.searchText).subscribe(res => {
      console.dir(res);
      setTimeout(() => {
        this.bookApi.searchedBooks = res['items'];
      }, 1000);
    },
      async err => {
        const toast = await this.toastController.create({
          message: "Can't connect to server..",
          duration: 4000
        });
        toast.present();
        // alert("Something went wrong..");
        console.log(err);
      }
    );
  }

  async view(book) {
    console.log(book);

    const modal = await this.modalController.create({
      component: BookPage,
      componentProps: {
        'bookDetail': book
      },
      mode: 'ios'
    });
    return await modal.present();
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
    /*     this.router.navigateByUrl('form'); */
    /*  const animation = createAnimation()
       .addElement(document.querySelector("ion-fab"))
       .easing("ease-in-out")
       .duration(1000)
       .direction("alternate")
       .iterations(1)
       .keyframes([
         { offset: 0, transform: "scale(1)", opacity: "1" },
         { offset: 0, transform: "scale(1.2)", opacity: "1" },
         { offset: 0, transform: "scale(1.1)", opacity: "1" },
         { offset: 1, transform: "scale(1)", opacity: "1" }
       ]);
     animation.play().then(res => {
       this.bookApi.addToCart(book);
     });
  */


  }

  cart() {
    this.router.navigateByUrl('cart');
  }

  login(){
    this.router.navigateByUrl('login');
  }
  register(){
    this.router.navigateByUrl('register');
  }

  account(){
    this.router.navigateByUrl('account');
  }
}
