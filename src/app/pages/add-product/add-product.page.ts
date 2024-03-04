import { QRCodeComponent } from 'angularx-qrcode';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ProductService } from 'src/app/services/product.service';

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
    private navCtrl: NavController,     // Agregar Navegador
    private productS: ProductService, // Inyeccion del servicio
    private qrCodeG: QRCodeComponent
    ) {}

   Back(){
    this.navCtrl.navigateBack('/home');
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
  
      if (image && image.webPath) { // Verificar si image.webPath tiene un valor
        this.product.image = image.webPath;
        console.log(image);
        console.log('Imagen agregada exitosamente');
        
      }
    } catch (error) {
      console.error('Cancelado');
    }
  }
  
  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });
  
      if (image && image.webPath) { // Verificar si image.webPath tiene un valor
        this.product.image = image.webPath;
        console.log(image);
      }
    } catch (error) {
      console.error('Selecciona una foto');
    }
  }

  async saveProduct() {
    if(this.validateForm()){
     try {
       await this.productS.addProduct(); // Utiliza tu servicio para agregar el producto
       console.log('Producto guardado exitosamente');
     } catch (error) {
       console.error('Error al guardar el producto', error);
     }
    }
  }

  validateForm(): boolean {
    if (!this.product.name || !this.product.description || !this.product.price || !this.product.quantity || !this.product.size || !this.product.color || !this.product.image) {
      console.error('Todos los campos son obligatorios');
      return false;
    }

    if (isNaN(this.product.price) || isNaN(this.product.quantity) || this.product.price <= 0 || this.product.quantity <= 0) {
      console.error('El precio y la cantidad deben ser números positivos');
      return false;
    }

    return true;
  }

  generateQRCode() {
    const qrCodeData = `Producto: ${this.product.name}\nDescripción: ${this.product.description}\nPrecio: ${this.product.price}\nCantidad: ${this.product.quantity}\nTalla: ${this.product.size}\nColor: ${this.product.color}\nImagen: ${this.product.image}`;
    this.qrCodeG.qrcElement.nativeElement = qrCodeData;
    console.log(qrCodeData);
  }

  ngOnInit() {
  }
}
