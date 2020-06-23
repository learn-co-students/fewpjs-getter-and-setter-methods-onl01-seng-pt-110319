// Add your Circle class here
const pi = MATH.PI;

class Circle {
  
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this.radius * 2 * pi;
  }
  get area(){
    return (this.radius * this.radius) * pi;
  }
  
  set area(area) {
    this.radius = Math.sqrt(area / pi);
  }
  set circumference(circumference){
    this.radius = circumference / (pi * 2);
  }
  set diameter(diameter){
    this.radius = diameter / 2;
  }
  
  
}