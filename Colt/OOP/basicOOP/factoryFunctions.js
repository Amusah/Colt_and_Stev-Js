// Building up your own object, hence the term factory
function hex(r, g, b){
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b){
    return `rgb(${r}, ${g}, ${b})`;
}



function makeColor(r, g, b){
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const { r, g, b } = this;
        return `rgb(${r},${g}, ${b})`;
    }
    color.hex = function(){
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor);

document.body.style.backgroundColor = firstColor.hex()