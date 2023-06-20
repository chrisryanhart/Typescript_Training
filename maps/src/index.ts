/// <reference types="@types/google.maps" />
import { CustomMap } from "./CustomMap";

import { User } from './User';
import { Company } from './Company';

const user = new User();
const customMap = new CustomMap('map');
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);


// let test = document.getElementById('map');


// let newMap = new google.maps.Map(document.getElementById('map') as HTMLElement, {
//   zoom:1,
//   center: {
//     lat: 0,
//     lng: 0
//   }
// });


