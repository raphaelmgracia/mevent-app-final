import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InviteesModalComponent } from './invitees-modal/invitees-modal.component';
import { EventService } from '../home/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {

  dataReturned: any[];

  public eventData = new FormGroup({
    eventId: new FormControl(''),
    eventName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)
    ]
    ),
    startDate: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    endDate: new FormControl('', [Validators.maxLength(50)]),
    startTime: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    endTime: new FormControl('', [Validators.maxLength(50)]),
    imageUrl: new FormControl('', [Validators.maxLength(250)]),
    description: new FormControl('', [Validators.maxLength(500)]),
    location: new FormControl('', [Validators.maxLength(100)]),
    invitees: new FormControl([''], [Validators.required]),
  });




  constructor(
    private modalController: ModalController,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InviteesModalComponent,
      componentProps: {
        "inviteeList": '',
      }
    });
    await modal.present();

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    })
  }

  
  postNewEvent(){
    console.log('postNewEvent', this.eventData.value);
    this.eventService.postEvent(this.eventData.value);
    // redirect home;
    this.router.navigate(['../home']);
  }
}
