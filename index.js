// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return this.radius *2; 
    }
    
    get circumference(){
        return this.radius *2 * Math.PI;
    }

    get area(){
        return this.radius*this.radius*Math.PI;
    }

    set diameter(newRadius){
        this.radius = newRadius/2;
    }

    set circumference(newRadius){
        this.radius = newRadius/2/Math.PI;
    }




}


