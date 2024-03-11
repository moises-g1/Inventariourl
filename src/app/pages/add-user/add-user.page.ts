import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa el FormBuilder y Validators
import { AuthenticationService } from '../../services/authentication.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  newUserForm: FormGroup = this.formBuilder.group({   // Declara la variable para el formulario de nuevo usuario
    nombre: ['', Validators.required],   // Crea el formulario de nuevo usuario con validadores
    edad: ['', [Validators.required, Validators.min(18), Validators.max(80)]],
    telefono: ['', Validators.required],
    tipo_usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder, // Inyecta el FormBuilder
    private authS: AuthenticationService // Inyecta el servicio de autenticación
  ) { }

  ngOnInit() {


  }

  Back() {
    this.navCtrl.navigateBack('/home');
  }

  addNewUser() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.value;

      console.log(newUser);

      this.authS.crearUsuario(newUser).subscribe(
        response => {
          console.log('Usuario creado exitosamente', response);
          this.navCtrl.navigateBack('/home');
        },
        error => {
          console.error('Error al crear usuario', error);
        }
      );
    } else {
      console.error('El formulario es inválido');
    }
  }

}
