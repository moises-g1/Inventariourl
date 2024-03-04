import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  constructor(
    private navCtrl: NavController,     // Agregar Navegador
  ) { }

  Back(){
    this.navCtrl.navigateBack('/home');
  }
  
  addNewUser() {
    // Aquí va la lógica para agregar un nuevo usuario
  }


  ngOnInit() {
  }

}
