const { Shape, Circle, Triangle, Square } = require('./shapes');

class SVG {
  constructor(options) {
    this.options = options;
    this.shapes = [];
    this.width = options.width || 300;
    this.height = options.height || 200;
  }

  addShape(shape, x, y) {
    if (!(shape instanceof Shape)) {
      throw new Error("Invalid shape type");
    }
    shape.x = x;
    shape.y = y;
    this.shapes.push(shape);
  }
  setText(text, color = 'black', size = '2em') {
    this.text = `<text x="${this.width / 2}" y="${this.height / 2}" fill="${color}" dominant-baseline="middle" text-anchor="middle" font-size="${size}">${text}</text>`;
  }
  
  
  
  

  toSVG() {
    let svg = `<svg width="${this.options.width}" height="${this.options.height}" xmlns="http://www.w3.org/2000/svg">\n`;
    this.shapes.forEach((shape) => {
      svg += shape.render();
    });
    if (this.text) {
      svg += this.text;
    }
    svg += "</svg>";
    return svg;
  }
  
  
}

module.exports = {
  SVG: SVG
};
