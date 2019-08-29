import { Component, OnInit, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InviteesService } from '../services/invitees.service'


@Component({
  selector: 'app-invitees-modal',
  templateUrl: './invitees-modal.component.html',
  styleUrls: ['./invitees-modal.component.scss'],
})

export class InviteesModalComponent implements OnInit {

  public inviteeList;
  public list: string[];

  constructor(
    private modalController: ModalController,
    private inviteesService: InviteesService
  ) {
    this.list = []; // new Array<string>()
  }

  ngOnInit() {
    this.inviteeList = this.inviteesService.getAllInvitees();
  }


  addInvitee(guest) {
    this.list.push(guest.name);
    console.log(this.list);
  }

  dismissModal(list) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    const newList = [];
    list.map(el => {
      if (el.isChecked) {
        newList.push(el);
      }
    });
    this.modalController.dismiss(newList);
  }

}
