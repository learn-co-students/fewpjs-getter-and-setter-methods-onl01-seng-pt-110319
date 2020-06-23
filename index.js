// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius + this.radius
    }

    get circumference() {
        return Math.PI * (this.radius * 2)
    }

    get area() {
        return Math.PI * (Math.pow(this.radius, 2))
    }

    // all instances should also be able to set this.
    // radius by setting a value to diameter, circumference,
    //  or area.

    set diameter(newDiameter) {
        // console.log(this.diameter)
        this.radius = (newDiameter / 2)
    }

    set circumference(newCircum) {
        //newCircum = 100
       // console.log(this.circumference) = 37.69911184307752
       this.radius = (newCircum / (Math.PI * 2))

    }

}