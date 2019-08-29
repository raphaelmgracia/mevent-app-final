import { IUser } from './user';
import { IRestResponse } from '../rest.response';

export interface IUserResponse extends IRestResponse {
  user: IUser;
}
