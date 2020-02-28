import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPageRoutingModule } from './book-routing.module';

import { BookPage } from './book.page';
import { FormPageModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPageRoutingModule,
    FormPageModule
  ],
  declarations: [BookPage]
})
export class BookPageModule {}
