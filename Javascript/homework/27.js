/* 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    const sortedArray = ages.sort((a,b) => {
        return a-b
    })
    console.log(`The Smallest is ${sortedArray[0]} and the Largest is ${sortedArray[sortedArray.length-1]}`)
    
    // Median
    const median = (arr) => {   
        const middle = Math.floor(arr.length/2)
        if(arr.length%2===0){
            return (arr[middle-1] + arr[middle])/2
        }
        else{
            return arr[middle]
        }
    }
    console.log(`The Median is ${median(sortedArray)}`)
    // Average
    const average = (arr) => {
        let sum = 0;
        for(let i =0;i<arr.length;i++){
            sum += arr[i]
        }
        return (sum/arr.length)
    }
    console.log(`The average of the ages array is ${average(ages)}`)
    // range
    console.log(`The Range of the array is ${sortedArray[0]} - ${sortedArray[sortedArray.length-1]}`)
    // Comparing
    let averageAge = average(ages)
    console.log(`The difference in smallest and avg is ${Math.abs((sortedArray[0]-averageAge))} and Largest and avg is ${Math.abs((sortedArray[sortedArray.length-1]-averageAge))}`)