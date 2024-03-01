import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx'; // Asegúrate de importar File si lo estás utilizando

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    size: '',
    color: '',
    image: '',
  };

  constructor(
    private navCtrl: NavController,
    private camera: Camera, 
    private file: File
    ) {}

  Back(){
    this.navCtrl.navigateBack('/home');
  }

  async takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };

    try {
      const result = await this.camera.getPicture(options);
      this.product.image = result;
    } catch (error) {
      console.error(error);
    }
  }

  async selectImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    try {
      const result = await this.camera.getPicture(options);
      this.product.image = result;
    } catch (error) {
      console.error(error);
    }
  }

  async saveProduct() {
    // Guarda el producto en la base de datos
    // ...

    // No necesitas instanciar QRCodeModule, solo importa el módulo y utiliza sus métodos directamente
    // const qrCodeDataURL = await QRCodeModule.toDataURL(`Producto: ${this.product.name}\nDescripción: ${this.product.description}\nPrecio: ${this.product.price}\nCantidad: ${this.product.quantity}\nTalla: ${this.product.size}\nColor: ${this.product.color}\nImagen: ${this.product.image}`);

    // Muestra el código QR en la pantalla
    // ...
  }

  generateQRCode() {
    // const qrCodeData = 'Datos que quieres codificar en el QR';
    // const qrCodeDataURL = QRCodeModule.toDataURL(qrCodeData);
    // console.log(qrCodeDataURL); // Utiliza qrCodeDataURL para mostrar o procesar el código QR generado
  }

  ngOnInit() {
  }
}
