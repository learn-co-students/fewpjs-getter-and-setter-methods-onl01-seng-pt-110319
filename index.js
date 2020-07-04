class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(num) {
        this.radius = num / 2;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    set circumference(num) {
        this.diameter = num / Math.PI;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    set area(num) {
        let holder = num / Math.PI 
        this.radius = holder / holder;
    }

}