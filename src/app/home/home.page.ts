import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  category: string = 'shirt';

  shirtItems = ['Shirt 1', 'Shirt 2', 'Shirt 3'];
  dressItems = ['Dress 1', 'Dress 2', 'Dress 3'];
  pantsItems = ['Pants 1', 'Pants 2', 'Pants 3'];
  blouseItems = ['Blouse 1', 'Blouse 2', 'Blouse 3'];
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  addProduct() {
    this.router.navigate(['/add-product'], { relativeTo: this.activatedRoute });
    
    
  }

  addUser() {
    this.router.navigate(['/add-user'], { relativeTo: this.activatedRoute });
    
  }

}
