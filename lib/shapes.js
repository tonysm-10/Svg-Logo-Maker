class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error("Render method must be implemented");
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
      this.radius = 80;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };
  
  
  