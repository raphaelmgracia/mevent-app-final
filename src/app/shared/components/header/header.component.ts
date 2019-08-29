import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from '../../models/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Title';
  public authUser$: Observable<IUser>;

  constructor(
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.authUser$;
  }

  ngOnInit() {}

  logout() {
    this.authService.signOut();
  }

}
