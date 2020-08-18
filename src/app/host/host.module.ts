import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDropzoneModule} from "ngx-dropzone";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { HouseDetailsComponent } from './house-details/house-details.component';

const routes: Routes = [
  {path: "create", component: HouseCreateComponent},
  {path: "list", component: HouseListComponent},
  {path: ":id/edit", component: HouseEditComponent},
  // {path: "book", loadChildren: './house-status/house-status.module#HouseStatusModule'},
  {path: "book", loadChildren: () => import('./house-status/house-status.module').then(m => m.HouseStatusModule)},
]

@NgModule({
  declarations: [
    HouseCreateComponent,
    HouseListComponent,
    HouseEditComponent,
    HouseDetailsComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatListModule,
    MatIconModule
  ],
  exports: [],
  providers:[]
})
export class HostModule {
}
