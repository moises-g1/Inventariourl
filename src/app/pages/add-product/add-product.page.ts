import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  newProductForm: FormGroup = this.formBuilder.group({
    modelo: ['', Validators.required],
    tipo: ['', Validators.required],
    talla: ['', Validators.required],
    color: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    precio: [0, [Validators.required, Validators.min(0.01)]],
    descripcion: ['', Validators.required],
    image: ['', Validators.required] // No es necesario agregar Validators.required aquí
  });

  ngOnInit() {}

  Back() {
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

      if (image && image.webPath) {
        this.newProductForm.patchValue({ image: image.webPath });
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

      if (image && image.webPath) {
        this.newProductForm.patchValue({ image: image.webPath });
        console.log('Imagen seleccionada exitosamente');
      }
    } catch (error) {
      console.error('Selecciona una foto');
    }
  }

  async addNewProduct() {
    if (this.newProductForm.valid) {
        const newProduct = this.newProductForm.value;
        console.log(newProduct);

        this.productService.createProduct(newProduct).subscribe(
          response => {
            console.log('Producto guardado exitosamente', response);
            this.navCtrl.navigateBack('/home');
          },
          error => {
            console.error('Error al crear usuario', error);
          }
        );
      } else {
        console.error('El formato es invalido');
      }
    }
}
