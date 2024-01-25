console.log("Yolo Badge");

/*

const numbers = [3,4];

//End
numbers.push(5,6);

//Beginning
numbers.unshift(1,2);

//Middle
numbers.splice(2 , 0 , 'a' , 'b');

console.log(numbers);

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

//Combining an array 
const first = [1,2,3];
const second = [4,5,6];

const combined = [...first,...second];
console.log(combined);

//to copy entire array
const copy = [...combined];
console.log(copy);

//To get all array values to one

const number = [1,-1, 2, 3];

const sum = number.reduce((accumulator , currentValue) =>{
    return accumulator + currentValue;
},0);

const sum1 = number.reduce((accumulator , currentValue) => accumulator + currentValue);

console.log(sum);
console.log(sum1);
*/

//Exercise 1
const numbers = arrayFromRange(-10 , -4);

console.log(numbers);

function arrayFromRange(min , max){  
    const result = []

    for(let i = min ; i <= max ; i++)
        result.push(i);
    return result;
}

//Exercise 2
const numbers1 = [1,2,3,4];

const searchResult = includes(numbers1 , 5);

console.log(searchResult);

function includes(array , serachEliment){
    for(let arra of array){
        if(arra === serachEliment)
            return true;
        else    
            return false;
    }
}

//Exercise 3
const numbers2 = [1,2,3,4,1,1];

const output = except(numbers2, [1,2]);

console.log(output);

function except(array , excluded){
   const output = [];

    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
    return output;    
}

//Exercise 4
const numbers4 = [1,2,3,4];

const ex4Output = move(numbers4 , 1, 2);

console.log(ex4Output);

function move(array , index , offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];

    const element = output.splice(index , 1)[0];
    output.splice(position , 0 , element)
    return output;

}

//Exercise 5
const numbers5 = [1,2,3,4,1];

const count = countOccurrences(numbers5, 1);

console.log(count);

// function countOccurrences(array , searchEliment){
//     let count = 0;
//     for(let element of array)
//         if(element === searchEliment)
//             count++;
//         return count;
// }

//another method using reduce method
function countOccurrences(array , searchEliment){
    
    return array.reduce((accumulator , current) =>{
        const occurrences = (current === searchEliment) ? 1 : 0;
        return accumulator + occurrences;
    }, 0);
}

//Exercise 6
const numbers6 = [1,9,3,4];

const max = getMax(numbers6);

console.log(max);

// function getMax(array){
//     let max = 0;
//     for(let element of array)
//         if(element > max)
//             max = element;
//     return max;
// }

//another method using reduce method
function getMax(array){
    return array.reduce((a , b) => a > b ? a : b);
}

//Exercise 7
const movies = [
    {title: 'a' , year: 2018, rating: 4.5},
    {title: 'b' , year: 2018, rating: 4.7},
    {title: 'c' , year: 2018, rating: 3},
    {title: 'd' , year: 2017, rating: 4.5},
];

//All the movies in 2018 with rating > 4
//Sort them by their rating
//Descending order
//Pick their title

const title = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(title);
