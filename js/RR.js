import Car from './Car.js';
export class RR extends Car{
    // setter
    setPrice(price){
        this.mPrice = price;
    }
    // getter
    getPrice(){
        console.log(this.mPrice);
    }
}