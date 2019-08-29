import { Injectable } from '@angular/core';
import { IInvitee } from '../../../shared/types/iinvitee';

@Injectable({
  providedIn: 'root'
})
export class InviteesService {
  private inviteeList: IInvitee[] = [
    {
      name: 'Paul',
      secondName: 'Dupont',
      userName: 'Paulo',
      email: 'paulo@gmail.com',
      status: 'accepted',
      message: 'ouais, mais je serai sûrement bourré',
      isChecked: false
    },
    {
      name: 'Paula',
      secondName: 'Martinez',
      userName: 'Paulit',
      email: 'paulamartinez@gmail.com',
      status: 'maybe',
      message: 'Il faut que je voie',
      isChecked: false
    },
    {
      name: 'Pauli',
      secondName: 'Martinez',
      userName: 'Paulit',
      email: 'paulamartinez@gmail.com',
      status: 'maybe',
      message: 'Il faut que je voie',
      isChecked: false
    }
  ];
  constructor() { }

  getAllInvitees() {
    return this.inviteeList;
  }






}
