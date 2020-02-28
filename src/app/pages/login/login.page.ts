import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public name: any;
  public password: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    let data = {
      name: this.name,
      pass: this.password
    }
    let headers2 = new HttpHeaders();
    headers2.append('Content-Type', 'application/json');

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin' + ':' + 'welcome12') });



    this.http.get('http://72.249.48.96/~dmppeytr/jwt/token', { headers: headers }).subscribe(res => {
      console.log(res);
    });

    this.http.post('https://cors-anywhere.herokuapp.com/http://72.249.48.96/~dmppeytr/user/login?_format=json', data , { headers: headers2} ).subscribe( res => {
      console.log(res);
    },
      err => {
        alert("something went wrong!");
      }
    );
  }
}
