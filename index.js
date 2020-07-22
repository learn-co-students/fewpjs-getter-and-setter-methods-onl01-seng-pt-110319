// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius=radius
    }

    get diameter(){
        return this.radius*2
    }
    get circumference(){
        return this.diameter*Math.PI
    }
    get area(){
        return Math.PI*(this.radius**2)
    }

    set diameter(newValue){
        this.radius=newValue/2
    }
    set circumference(newValue){
        this.radius=newValue/(2*Math.PI)
    }
    set area(newValue){
        this.radius=newValue/Math.PI

    }



}