import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninbComponent } from './signinb/signinb.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SigninbComponent,
        // canActivate: []
        // line above is the guard (try later)
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
