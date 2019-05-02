import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
 products: any[];
 filtered: any[];
 models: any [];
 filters: any[];
 sortDirection = 1;
 
  constructor(service: UserService) { 
    this.products = service.products;
    this.models = service.models;
    this.filters = this.models.slice();
    this.sortAndFilter();

  }


  filter(input) {
    if (input.checked) {
      this.filters.push(input.value);
    } else {
      this.filters.splice(this.filters.indexOf(input.value), 1);
    }
    this.sortAndFilter();
  }

  sort(select) {
    this.sortDirection = select.options[select.selectedIndex].value === 'up' ? 1 : -1;
    this.sortAndFilter();
  }

  sortAndFilter() {
    this.filtered = this.products
    .filter(product => this.filters.indexOf(product.model) !== -1)
    .sort((a,b) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price > b.price ? this.sortDirection : -this.sortDirection;
    })
  }
  

}
