import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/common.interfaces';

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const APIURL= 'http://localhost:8000/api/'

export interface Admistrador{

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    //private router: Router,
    private http: HttpClient
  ) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${APIURL}usuarios`);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${APIURL}usuario/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${APIURL}usuario`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${APIURL}usuario/${id}`, usuario);
  }

  borrarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${APIURL}usuario/${id}`);
  }
}
