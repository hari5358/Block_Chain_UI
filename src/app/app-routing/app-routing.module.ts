import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from '../components/sign-up/sign-up.component';
import {SignInComponent} from '../components/sign-in/sign-in.component';

const appRoutes: Routes = [
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
