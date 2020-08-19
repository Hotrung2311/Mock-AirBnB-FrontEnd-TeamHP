import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "@app/app.component";

const routes: Routes = [
  {path:'home', loadChildren: () => import('./home-client/home-client.module').then(value => value.HomeClientModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
