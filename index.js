// Add your Circle class here
const pi = MATH.PI;
class Circle{
  
  constructor(raius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  get circumference(){
    return this.radius * 2 * pi;
  }
  get area(){
    return (this.radius * this.radius) * pi;
  }
  
  
  
  
}