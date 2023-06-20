const drink = {
  color: 'brown',
  carbonated: true,
  sugar:40
}

// type alias
type Drink = [string,boolean,number];

// can't reassign vals based on 
const pepsi: Drink = ['brown',true,40];
const sprite: Drink = ['clear',true, 40];
