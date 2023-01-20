/* 30. Write a script which generates a random hexadecimal number.
 */

const hexNum = () => {

    let hexArr =[];
    for(let i=0; i<10;i++){
        hexArr.push(Math.floor(Math.random()*16).toString(16))
    }
    return hexArr
}
console.log(hexNum())
