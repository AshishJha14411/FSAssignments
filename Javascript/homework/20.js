/* 
20. Write a code which can give grades to students according to theirs scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
 */

const gradeSheet = (marks) => {
    if(marks>=80 && marks<=100){
        console.log(`The Grade for ${marks} is A`)
    } else  if(marks>=70 && marks<=89){
        console.log(`The Grade for ${marks} is B`)
    } else  if(marks>=60 && marks<=69){
        console.log(`The Grade for ${marks} is c`)
    } else  if(marks>=50 && marks<=59){
        console.log(`The Grade for ${marks} is D`)
    } else {
        console.log(`The Grade for ${marks} is F`)
    }
}

gradeSheet(84)
gradeSheet(74)
gradeSheet(64)
gradeSheet(54)
gradeSheet(4)