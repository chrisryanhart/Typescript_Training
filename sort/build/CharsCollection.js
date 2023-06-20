"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharsCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharsCollection extends Sorter_1.Sorter {
    constructor(data) {
        // incorportate the constructor of the parent
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split('');
        const leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join('');
    }
}
exports.CharsCollection = CharsCollection;
