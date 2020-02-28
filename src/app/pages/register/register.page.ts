import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public name: any;
  public mail: any;
  public org: any;
  public password: any;

  constructor(public http: HttpClient, public router: Router, public accountApi: AccountService) { }

  ngOnInit() {
  }

  register() {
    let data = {
      "name": [
        {
          "value": this.name
        }
      ],
      "field_name_of_organization": [{
        "value": this.org
      }],
      "mail": [
        {
          "value": this.mail
        }
      ],
      "timezone": [
        {
          "value": "UTC"
        }
      ],
      "pass": [
        {
          "value": this.password
        }
      ]
    }
    console.log(data);
    this.accountApi.register(data).subscribe(res => {
      console.log(res);
      localStorage.setItem('user',JSON.stringify(res));
      this.accountApi.isLogged=true;
      this.router.navigateByUrl('home');
    },
      err => {
        alert(err.error.message);
      }
    );

  }
}
