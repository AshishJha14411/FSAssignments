/* 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
 */
let base = prompt('Enter the base of the triangle','')
let height = prompt('Enter the height of the triangle','')

let areaTriangle = (b,h) => {
    return (0.5*b*h)
}
console.log(areaTriangle(base,height))

//prompt is an object provided in window so we neet either HTML or we can run it in browser console.