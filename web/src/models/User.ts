import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {

  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);




}

// import axios, { AxiosResponse } from 'axios';

// interface UserProps {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// type Callback = () => void;

// export class User {
//   events: { [key: string]: Callback[] } = {};

//   constructor(private data: UserProps) {}

//   get(propName: string): number | string {
//     return this.data[propName];
//   }

//   set(update: UserProps): void {
//     Object.assign(this.data, update);
//   }

//   on(eventName: string, callback: Callback): void {
//     const handlers = this.events[eventName] || [];
//     handlers.push(callback);
//     this.events[eventName] = handlers;
//   }

//   trigger(eventName: string): void {
//     const handlers = this.events[eventName];

//     if (!handlers || handlers.length === 0) {
//       return;
//     }

//     handlers.forEach((callback) => {
//       callback();
//     });
//   }

//   fetch(): void {
//     axios
//       .get(`http://localhost:3000/users/${this.get('id')}`)
//       .then((response: AxiosResponse): void => {
//         this.set(response.data);
//       });
//   }
// }
