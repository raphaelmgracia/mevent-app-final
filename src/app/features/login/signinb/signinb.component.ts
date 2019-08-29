import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../shared/types/iuser';
import { SigninService } from '../../../shared/services/signin.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signinb',
  templateUrl: './signinb.component.html',
  styleUrls: ['./signinb.component.scss'],
})
export class SigninbComponent implements OnInit {

  user: IUser = {
    pwd: '',
    email: '',
    userName: '',
  };

  ngOnInit() {
  }

  constructor(
    private _router: Router,
    private signinService: AuthService,
    ) { }

    authenticate(user) {
      this.user = user;
      if (this.signinService.isAuthenticated) {
        this._router.navigate(['home'])
      }
    }

}
