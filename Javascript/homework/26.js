/* 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 */

const countries = [
    "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
    "Ethiopia",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
]
if(countries.includes('Ethiopia')){
    const idx = countries.indexOf('Ethiopia')
    console.log(countries[idx].toUpperCase())
}else {
    countries.push('Ethiopia')
}
console.log(countries)