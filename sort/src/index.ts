import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollections";
import { CharsCollection } from "./CharsCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10,3,-5,0]);
// numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);


// const charsCollection = new CharsCollection('Xaayb');
// charsCollection.sort();
// console.log(charsCollection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();