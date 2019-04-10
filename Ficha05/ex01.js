class rectangle {
    constructor (width = 2, height=1) {
        this.width = width
        this.height = height
        this._color = "#FFFFFF"
    } 
    
    get width () {
        return this._width
    }

    set width(value) {
        this._width = value
    }

    get height () {
        return this._height
    }

    set height(value) {
        this._height = value
    }
    
    get color () {
       return this._color
    }

    getArea () {
        return this._width*this._height
    }

    getPerimeter () {
        return this._width*2 + this._height*2
    }
}

const newRectangle = new rectangle(10,5);
const newRectangle2 = new rectangle();

console.log(newRectangle.width);
console.log(newRectangle.height);
console.log(newRectangle._color);
console.log(newRectangle.getArea());
console.log(newRectangle.getPerimeter());

console.log("Rectangle 2:")
console.log(newRectangle2.width);
console.log(newRectangle2.height);
console.log(newRectangle2._color);
console.log(newRectangle2.getArea());
console.log(newRectangle2.getPerimeter());