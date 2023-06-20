// interface Vehicle {
//   name: string;
//   year:Date;
//   broken:boolean;
//   summary(): string;
// }

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`
  }
};

const drink = {
  color:'brown',
  carbonated:true,
  sugar:40,
  summary(): string {
    return `My dring has ${this.sugar} gs of sugar`;
  }
}

const printSummary = (item: Reportable): void => {

  console.log(item.summary())
}

printSummary(oldCivic);
printSummary(drink);