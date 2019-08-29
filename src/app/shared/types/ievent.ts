// TODO has to be matched to data interface on backend

export interface IEvent {
  eventId: string;
  eventName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  imageUrl: string;
  description: string;
  location: string;
  invitees: string[];
}
