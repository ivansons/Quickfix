import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public userDetails:any;
  constructor(public router:Router,public accountApi:AccountService) { }

  ngOnInit() {
    this.userDetails=JSON.parse(localStorage.getItem('user'));
    console.log(this.userDetails);
  }

  logout(){
    localStorage.setItem('user','');
    this.accountApi.isLogged=false;
    this.router.navigateByUrl('home');
  }

}
