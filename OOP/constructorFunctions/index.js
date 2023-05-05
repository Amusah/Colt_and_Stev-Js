function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this); // points to window object without new keyword 
}
/*
    a constructor function is mostly declared with a capital 
    letter at the beginning.
    a constructor function is used to create javascript objects 
    when called with the new keyword.

    when the function is called normally, the 'this' keyword
    points to the window object but...
    when you call the function with the 'new' keyword, it 
    points to function itself
*/

let color = Color(23,45,65); // without the new keyword
console.log(color); // prints undefined to the console

let myColor = new Color(123, 54, 66); // with new keyword
console.log(myColor);

// adding up to the prototype object
Color.prototype.rgb = function(){
    const { r, g, b } = this;
    //console.log(this)
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function(){
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0){
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;ebenphinea
    
}

let color1 = new Color(98, 56, 77);
let color2 = new Color(7, 7, 7);