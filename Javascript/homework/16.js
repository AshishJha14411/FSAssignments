/* 
16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 */

let pi = 3.14
let r = prompt('Enter the radius of the Circle');

let areaCircle = (r) =>{
    return (pi*r*r)
}
let circumCircle = (r) => {
    return (2*pi*r)
}

console.log(areaCircle(r))
console.log(circumCircle(r))