/* 32. Array Questions
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Find the country containing the hightest number of characters in the countries array
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Extract all the countries containing only four characters from the countries array and print it as array
    - Extract all the countries containing two or more words from the countries array and print it as array
    - Reverse the countries array and capitalize each country and stored it as an array
 */
    const country = require('./countries')
    const webTechs = require('./webTech')
// includes land word
/*     const newCountryArray = country.countryList.filter((ele) => {
        return ele.includes('land')
    })
console.log(newCountryArray) */


// highest char
/* 
const maxChar = (arr) => {
    let max = 0;
    arr.forEach(ele => {
        if(ele.length > max){
            max = ele.length
        }
    });
    return max;
}
console.log(maxChar(country.countryList)) */

// Contains only 4 char
/* const fourChar = country.countryList.filter((ele)=> ele.length===4)

console.log(fourChar) */


// greater than 2 words
/* const twoOrMore = country.countryList.filter((ele) => {
    return ele.includes(' ')
})
console.log(twoOrMore) */
let reverseCountry = country.countryList.reverse().map((ele) => {
   return ele = ele.toUpperCase()
});

console.log(reverseCountry)

