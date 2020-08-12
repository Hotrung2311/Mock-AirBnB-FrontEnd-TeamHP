import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'detail', component: ProductDetailComponent},
  {path: 'list', component: ProductListComponent}

]

@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
