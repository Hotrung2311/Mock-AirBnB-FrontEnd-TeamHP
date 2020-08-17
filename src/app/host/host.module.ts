import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: "create", component: HouseCreateComponent},
  {path: "list", component: HouseListComponent},
  {path: ":id/edit", component: HouseEditComponent},
]

@NgModule({
  declarations: [
    HouseCreateComponent,
    HouseListComponent,
    HouseEditComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [],
  providers:[]
})
export class HostModule {
}
