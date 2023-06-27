import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('hi there')
  fly(): void {
    console.log('vrrr');
  }

}

function get(path: string){
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane){
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    
    router.get(path, target.prototype[key]);
  }
}


const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);


// Reflect.defineMetadata('note', 'hi there!',plane, 'color');
// // Reflect.defineMetadata('height', 10 ,plane);


// const note = Reflect.getMetadata('note',plane, 'color');
// // const height = Reflect.getMetadata('height',plane);

// console.log(note);
// console.log(height);
