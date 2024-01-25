console.log("Yolo Badge");

const person = {
    firstNname: 'Yasas',
    lastName: 'Lakmina',

    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error("Value is not a string");
        }
        const parts = value.split(' ');

        if(parts.length !== 2){
            throw new Error("Enter a both names");
        }

        this.firstNname = parts[0];
        this.lastName = parts[1];
    }

};

try{
    person.fullName = 'Yasas Lakminas';
}catch(e){
    alert(e);
}


console.log(person);

//Exercise 1
function sum(...values){
    if(values.length === 1 && Array.isArray(values[0]))
         values = [...values[0]];

    return values.reduce((a,b) => a+b);
}

console.log(sum([1,2,3,4,5]));


//Exercise 2
const circle = {
    radius : 2,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);

//Exercise 3

try{
    const numbers5 = [1,2,3,4,1];

    const count = countOccurrences(null, 1);
    
    console.log(count); 
}catch (e){
    console.log(e.message);
}


function countOccurrences(array , searchEliment){
    
    if(!Array.isArray(array)){
        throw new Error('This is not an array');
    }
    return array.reduce((accumulator , current) =>{
        const occurrences = (current === searchEliment) ? 1 : 0;
        return accumulator + occurrences;
    }, 0);
}


