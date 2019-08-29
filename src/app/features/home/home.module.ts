import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SigninService } from '../../shared/services/signin.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: ':eventId',
        component: EventDetailComponent
      }

    ]),
  ],
  declarations: [HomePage, EventDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SigninService
  ]
})
export class HomePageModule {}

  
