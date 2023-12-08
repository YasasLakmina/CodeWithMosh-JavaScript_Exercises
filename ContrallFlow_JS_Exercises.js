//Exercise 1
function max(num1, num2){
    if(num1 > num2)
        return num1;
    else
        return num2;
}

 function max(num1, num2){
    return  num1 > num2 ? num1 : num2;
}

console.log(max(10,20));

//Exercise 2
function isLandscape(width, height){
    //return width > height ? true : false; (there is no need of use conditional operator)
    return width > height;
}

 console.log(isLandscape(20,10));

//Exercise 3
/*Question
    Divisible by 3 => Fizz
    Divisible by 5 => Buzz
    Divisible by both 3 and 5 => FizBuzz
    Not divisible by 3 or 5 => input
    Not a number => 'Not a number'
*/

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number'){
        return NaN;
    }

    if((input % 3) === 0 && (input % 5) === 0)
    return 'FizzBuzz';
    
    if(input % 3 === 0){
        return 'Fizz';
    }

    if(input % 5 === 0){
        return 'Buzz';
    }

    return input;

}


//Exercise 4
    /*  Speed Limit = 70 => ok
        Every 5 above 70 = 1 point
        Math.floor(1.3) (Tip)
        12 points > = License Suspended
    */

checkSpeed(130);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint)
        console.log('Ok');
    else{
        const points = (Math.floor(speed - speedLimit)) / kmPerPoint;
        if(points >= 12)
            console.log('License Suspended');
        else{
            console.log('Points ' + points);
        }
    }

}


//Exercise 5 

showNumbers(10);

function showNumbers(limit){
    for(let i = 0 ; i <= limit ; i++){
        if(i % 2 === 0)
            console.log(i + ' "EVEN"');
        else{
            console.log(i + ' "ODD"')
        }
    }
}


//Exercise 7

const movie = {
    title : 'a',
    releseYear: 2018,
    rating: 4.5,
    director: 'b'

};

showProperties(movie);

function showProperties(obj){
    for(let key in movie){
        if(typeof movie[key] === 'string')
            console.log(key , movie[key] ); 
    }
}


//Exercise 8

//Question is if we pass 10 as limit it shoud display summation of the multipication of 3 and 5
//3 => 3,6,9
//5 => 5,10 

console.log(sum(10));

function sum(limit){
    let sumation = 0;

    for(let i = 0 ; i <= limit ; i++)
        if(i % 3 === 0  || i % 5 === 0)
            sumation += i;

    return sumation;
}


//Exercises 9

const marks = [80, 80, 50];

//Average = 70

//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calaculateGrade(marks));


function calaculateGrade(marks){
    let sum = 0;

    for(let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

//Exercise 10

showStarts(5);

function showStarts(rows){
    for(let row = 0 ; row <= rows ; row++){
        let pattern = '';
        
        for(let j = 0 ; j < row ; j++)
            pattern += '*';
        console.log(pattern);
    }
}

//Exercise 11

showPrimes(20);

function showPrimes(limit){
    for(let i = 2 ; i <= limit ; i++)  
        if(isPrime(i)) console.log(i);
}


function isPrime(number){
        for(let j = 2 ; j < number ; j++)
            if(number % j === 0)
              return false;
        
        return true;
}