import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { IEvent } from '../../shared/types/ievent';
import { SigninService } from '../../shared/services/signin.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  eventArray: IEvent[];
  eid: string;
  public authUser$: Observable<any> = this.authService.authUser$;

  constructor(
    private eventService: EventService,
    private authService: SigninService,
    private router: Router
    ) {
  }

  ngOnInit() {
    // check lockal storage user
    // if not exist redirect with router.navigate....
    // can also be done with a guard (=>angular guard, for later)
  }

  ionViewWillEnter() {
    this.loadEvents();
  }

  onClick(event){
    this.router.navigate(['../home/' + event.eventId])
  }


  onDeleteEvent(id){
    this.eventArray = this.eventService.deleteEvent(id);
  }

  async loadEvents() {
    this.eventArray = this.eventService.getAllEvents();
    // this.eventArray =  await this.eventServiceAPI.getAllEvents().toPromise().then((response: any) => response.events || []) as any;
  }

}
