function calculateArea(r, PI) {
    if (PI === void 0) { PI = 3.14; }
    var area = PI * r * r;
    return area;
}
var radius = 5;
var carea = calculateArea(radius);
console.log(carea);
