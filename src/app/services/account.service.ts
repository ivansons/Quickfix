import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public isLogged:boolean=false;
  constructor(public http:HttpClient) { 
    console.log("Account service");
    if(localStorage.getItem('user')!='' || localStorage.getItem('user')!=undefined){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  register(data){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization','Basic Auth annonymous' );

   return this.http.post('http://72.249.48.96/~dmppeytr/user/register?_format=json',data,{ headers: headers });
  }
}
