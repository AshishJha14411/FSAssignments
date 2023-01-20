/* 12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. */

    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const date = new Date().getDate()
    const day = new Date().getDay()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes();

    console.log(year)
    console.log(month)
    console.log(date)
    console.log(day)
    console.log(hours)
    console.log(minutes)
