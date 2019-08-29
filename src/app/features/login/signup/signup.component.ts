import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../shared/types/iuser';
import { Router } from '@angular/router';
import { SignupService } from '../../../shared/services/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: IUser = {
    pwd: '',
    userName: '',
    email: ''
  };
  constructor(
    private _router: Router,
    private signupService: SignupService
    ) { }

  ngOnInit() {}

}
