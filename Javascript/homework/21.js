/* 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */

const season = (month) => {
    if(month=='June' || month=='July' || month=='August'){
        console.log(`The season which occurs in the month of ${month} is Summer`)
    } else if(month=='March' || month=='April' || month=='May'){
        console.log(`The season which occurs in the month of ${month} is Spring`)
    } else if(month=='December' || month=='January' || month=='February'){
        console.log(`The season which occurs in the month of ${month} is Winter`)
    } else if(month=='September' || month=='October' || month=='November'){
        console.log(`The season which occurs in the month of ${month} is Autumn`)
    }
}

season('June')
season('May')
season('January')
season('October')