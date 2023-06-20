import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {

  constructor(public data: number[]){
    // ensures parent constructor code gets executed
    super();
  }

  // don't have to call length as a method
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void{
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

}