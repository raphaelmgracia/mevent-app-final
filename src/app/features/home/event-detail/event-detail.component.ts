import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent} from '../../../shared/types/ievent';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {

  public found: IEvent;

  constructor(
    private eventService: EventService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    const  id  = this._route.snapshot.params;
   
    if (!id) {return this._router.navigateByUrl('/home')}

      this.found = this.eventService.getAllEvents().find(el => el.eventId.toString() === id.eventId.toString())
      console.log('found',this.found)
     

    // .pipe(
    //   map(data => {
    //     const finded = data.find(el => el._id === id);
    //     return finded;
    //   })
    // );
  }
  onDeleteEvent(id){
    
    this.eventService.deleteEvent(id)
    
  }
  

}
