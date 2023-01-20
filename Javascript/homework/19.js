/* 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
 */

const isEven = (num) => {
    if(num%2===0){
        console.log(`The Number ${num} is Even`)
    }else{
        console.log(`The Number ${num} is Odd`)
    }
}
isEven(80)