import { Injectable } from '@angular/core';
import { IEvent } from '../../../shared/types/ievent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

public eventList: IEvent[] = [
  {
    eventId: '1',
    eventName: 'Mon super événement',
    startDate: '20.3.2007',
    endDate: '20.7.2009',
    startTime: '12:00',
    endTime: '12:45',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/02/13/21/57/lake-2063957_1280.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, aliquam? Sequi veritatis, ratione corporis fuga quas sapiente architecto, expedita in unde iusto totam cum, libero fugiat asperiores ducimus reprehenderit facere.',
    location: 'Parc des Bastions',
    invitees: ['Jean', 'Pierre', 'Paul']
},
{
  eventId: '2',
  eventName: 'Ma méga-teuf',
  startDate: '20.3.2008',
  endDate: '20.9.2009',
  startTime: '13:00',
  endTime: '13:45',
  imageUrl: 'https://cdn.pixabay.com/photo/2016/04/18/22/05/sea-1337565_1280.jpg',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, aliquam? Sequi veritatis, ratione corporis fuga quas sapiente architecto, expedita in unde iusto totam cum, libero fugiat asperiores ducimus reprehenderit facere.',
  location: 'Parc de la Grange',
  invitees: ['Devina', 'Adrien', 'Manuel']
},
{
  eventId: '3',
  eventName: 'Ma compétition de judo',
  startDate: '20.3.2010',
  endDate: '20.9.2010',
  startTime: '14:00',
  endTime: '14:45',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_1280.jpg',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, aliquam? Sequi veritatis, ratione corporis fuga quas sapiente architecto, expedita in unde iusto totam cum, libero fugiat asperiores ducimus reprehenderit facere.',
  location: 'Perle du lac',
  invitees: ['Alice', 'Laure', 'Anna']
}];


getAllEvents() {
  return this.eventList;
}

deleteEvent(eventId) {
  console.log('eventid',eventId)

  this.eventList = this.eventList.filter(el => el.eventId !== eventId);
  console.log('eventlist',this.eventList);
  return this.eventList;
}

postEvent(event) {
  this.eventList.push({...event, eventId: Date.now()});
  console.log(this.eventList);
  
}


// getAllEvents():any {

//   const httpOptions = {
//     headers: new HttpHeaders({
//       'x-user-id': '5d4171e81a15a70ce6625da8'
//     })
//   };
//   return this.http.get(environment.api + '/events', httpOptions );
//   // return this.eventList;
// }

// getOneEvent(id){
//   return this.eventList.find((list) => {list.eventId===id})
// }

}
