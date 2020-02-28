import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BookPageModule } from '../book/book.module';
import { FormPageModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BookPageModule,
    FormPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
