import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';


let routes = [
  { path:'product/:id', component: ProductPageComponent},
  {path: '', component: HomePageComponent},
  {path: '*', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
