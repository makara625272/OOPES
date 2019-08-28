export default class Car{
    // set name and get 
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log(this.mName);
    }
    setBrand(brand){
        this.mBrand = brand;
    }
    getBrand(){
        console.log(this.mBrand);
    }
    // behavior 
    speed(){
        console.log("Speed up 100km/h");
    }
    back(){
        console.log("Backward");
    }
}
