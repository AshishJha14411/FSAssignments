/* 31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814
 */

const country = require('./countries')
const webTechs = require('./webTech')

const sortedcountry = country.countryList.sort()
const sortedWebtech = webTechs.webTechs.sort()
console.log(sortedcountry)
console.log(sortedWebtech)