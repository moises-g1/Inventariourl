import { Usuario } from 'src/app/interfaces/common.interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios: Usuario[]=[];

  loginForm: FormGroup = this.form.group({
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });

  constructor(
    private authS: AuthenticationService,
    private form: FormBuilder,
    private router: Router
  ) {
    console.log()
  }

  ngOnInit(){}


  validar() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.value.usuario;
      const contrasenia = this.loginForm.value.contrasenia;

      // Realiza la petición al servicio de autenticación para obtener los usuarios
      this.authS.getUsuarios().subscribe((response: Usuario[]) => {
        console.log(response);
        // Verifica si la respuesta contiene algún usuario que cumpla las condiciones
        const isAdmin = response.some(user => user.nombre === usuario && user.contrasenia === contrasenia && user.tipo_usuario === 'admin');
        const noAdmin = response.some(user1 => user1.nombre === usuario && user1.contrasenia === contrasenia && user1.tipo_usuario === 'artesano');
        if (isAdmin) {
          // Redirige al usuario a la página de inicio
          this.router.navigate(['/home']);
        }
        else {
          if (noAdmin) {
            console.log('Solo los administradores pueden acceder');
          }else{
            // Muestra un mensaje de error en caso de credenciales incorrectas
            console.log('Credenciales incorrectas');
          }
        }
      }, error => {
        // Maneja errores de autenticación
        console.error('Error de autenticación', error);
      });
    }
  }


}

