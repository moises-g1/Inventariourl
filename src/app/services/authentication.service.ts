import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

const APIURL= ''


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    super(Capacitor.isNativePlatform() ? nativeAuthOptions : webAuthOptions);
  }

  async logueado(){
    await this.router.navigate(['/']);
  }

  getAdmin(){

  }

  postAdmin(){
    
  }
  
  updateAdmin(){

  }

  deleteAdmin(){

  }

  }