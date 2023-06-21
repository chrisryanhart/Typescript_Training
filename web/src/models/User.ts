import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {

  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  // have to pass in user properties
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps){
    this.attributes = new Attributes<UserProps>(attrs);
  }

  // string eventname
  get on(){
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch():void {
    const id = this.attributes.get('id');

    if(typeof id !== 'number'){
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    )
  }

  save():void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }

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
