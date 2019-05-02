import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent  {

product: object;

  constructor(usersServise: UserService, router: ActivatedRoute){
    router.paramMap.subscribe((params: any)=> {
    this.product = usersServise.getInfoById(params.params.id);
    });
   }

}
