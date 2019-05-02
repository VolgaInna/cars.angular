import { Injectable } from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  products = [
    {id: "1-1",
     name: "volkswagen polo",
     model: "hatchback",
     image: "/assets/images/1503311967_01-volkswagen-polo-2018.jpg",
     price: 461660,
     description: "good car",
     year: 2018 },
    {id: "1-2",
      name: "volkswagen polo sedan",
      model: "sedan",
      image: "/assets/images/polo-sedan-restyling-001.jpg",
      price: 376785,
      description: "good car",
      year: 2018 },
    {id: "1-3",
      name: "volkswagen atlas",
      model: "suv",
      image: "/assets/images/db2016au00890jpg.jpg",
      price: 1629000,
      description: "good car",
      year: 2017 },
    {id: "2-1",
      name: "volvo 1",
      model: "hatchback",
      image: "/assets/images/50ffd62ab721421945000006.jpg",
      price: 350,
      description: "good car",
      year: 2018 },
    {id: "2-2",
      name: "volvo 2",
      model: "sedan",
      image: "/assets/images/volvo_s90_2017_34.jpg",
      price: 350,
      description: "good car",
      year: 2018 },
    {id: "2-3",
      name: "volvo 3",
      model: "suv",
      image: "/assets/images/Volvo-XC90-2015.jpg",
      price: 100,
      description: "good car",
       year: 2015 },
    {id: "3-1",
      name: "kia rio",
      model: "hatchback",
      image: "/assets/images/p1754592-1496331640.jpg",
      price: 100,
      description: "good car",
      year: 2016 },
    {id: "3-2",
      name: "kia optima",
      model: "sedan",
      image: "/assets/images/56a2068191627.jpeg",
      price: 100,
      description: "good car",
      year: 2017 },
    {id: "3-3",
      name: "kia sportage",
      model: "suv",
      image: "/assets/images/1455176615_1.jpg",
      price: 100,
      description: "good car",
      year: 2017 },
  ];

  models = [
    'hatchback', 'sedan','suv'
  ];


  getInfoById (id) {
    id = id;
    for (let product of this.products) {
  
      if (product.id === id) {
        return product;
      }
    }
  }
}
