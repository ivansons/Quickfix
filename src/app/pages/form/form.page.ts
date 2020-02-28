import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  /*   public selectedBooktype:any;
    public  maxticket:any;
    public  minticket:any;
    public  loancollection:any;
    public courses :any;
    public  performancedate:any;
    public revenue :any;
    public  soldpreformancedate:any;
    public studentenrolled :any;
    public usagetype :any; */

  public data: any = {
    selectedBooktype: '',
    maxticket: '',
    minticket: '',
    loancollection: '',
    courses: '',
    performancedate: '',
    revenue: '',
    soldpreformancedate: '',
    studentenrolled: '',
    material_info: []
  }

  constructor(public bookApi: BooksService,public navParams: NavParams,public modalCtlr:ModalController) { }

  ngOnInit() {
  this.data.material_info=  this.navParams.get('bookDetail').volumeInfo;
  }
  continue() {
    console.log(this.data);
    this.bookApi.addToCart(this.data);
    this.modalCtlr.dismiss();
  }

}
