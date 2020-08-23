import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDropzoneModule} from 'ngx-dropzone';
import { HouseCreateComponent } from './house-create/house-create.component';

const routes: Routes = [


  {path: 'create', component: HouseCreateComponent},
]
@NgModule({
  declarations: [  HouseCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ]
})
export class HostModule {
}
