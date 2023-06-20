import { User } from "./models/User";

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20
// });

// axios.get('http://localhost:3000/users/1');


const user = new User({name:'record', age:0});
// user.set({name:'new name', age: 100});

// user.fetch();




// import { User } from "./models/User";

// // "start:parcel": "npx parcel index.html"
// // json-server -w db.json

// const user = new User({name:'chris', age:35});

// // user.set({name:'bobby', age: 123});
// user.on('change', () => {
//   console.log('change 1');
// });

// user.on('change', () => {
//   console.log('change 2');
// });

// user.on('save', () => {
//   console.log('save was triggered');
// });

// user.trigger('save');


// // console.log(user.get('name'));
// // console.log(user.get('age'));

// console.log(user);