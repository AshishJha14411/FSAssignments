/* 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. */

const age  = prompt('Enter your Age', '')

const isOldEnough = (number) => {
    if(number >= 18){
        console.log('You are old enough to drive')
    }else {
        console.log('Please Age a bit more')
    }
}
isOldEnough(age)