import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "@app/app.component";

const routes: Routes = [
  {path:'home', loadChildren: './home-client/home-client.module#HomeClientModule'},
  {path:'user', loadChildren: './user/user.module#UserModule'},
  // {path:'user', loadChildren: () => import('./user/user.module').then(value => value.UserModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
