import axios, {AxiosPromise, AxiosResponse} from "axios";
// import { UserProps } from "./User";

// http://localhost:3000/users

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);

      // .then((response: AxiosResponse): void => {
      //   this.set(response.data);
      // });
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id){
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}