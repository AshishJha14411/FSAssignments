/* 
23. Write a program which tells the number of days in a month, now consider leap year.
 */
const isLeap = () => {
    if(2020%4===0){
        return true
    }else {
        return false
    }
}
console.log(isLeap)
const monthDays = {
    January: '31',
    February: (((2022%4)===0) ? '28' : '27'),
    March: '31',
    April:'30',
    May:'31',
    June:'30',
    July:'31',
    August:'31',
    September:'30',
    October:'31',
    November:'30',
    December:'31',
}

const days = (month) => {
    console.log(monthDays[month])
}
days('Febraury')