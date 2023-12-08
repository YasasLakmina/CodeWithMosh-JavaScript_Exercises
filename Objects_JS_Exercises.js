//Factory function

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('Draw')
        }
    };
}

const circle1 = createCircle(2);
console.log(circle1.draw());

const circle2 = createCircle(3);
console.log(circle2.draw());

const now = new Date();
console.log(now);

const date1 = new Date('May , 11 2018 09:00');
console.log(date1);


//Exercise 1
const address = {
    street : 'Ostrich Road',
    city : 'Colombo',
    zipCode : 11300

};

function showAddress(address){

    for(let key in address){
        console.log(key , address[key]);
    }

}

showAddress(address);

//Exercise 2
function createAdress(street , city , zipCode){
    return{
        street,
        city ,
        zipCode
    };
}

let addresss = createAdress('a' , 'b' , 'c');

console.log(addresss);


function Address(street , city , zipCode){
    this.street = street;
    this,city = city;
    this.zipCode = zipCode;
}

const adress = new Address('a' , 'b' , 'c');

console.log(address);


//Exercise 3
const address1 = new Address('a' , 'b' , 'c');
const address2 = new Address('a' , 'b' , 'c');
const address3 = address1;

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));
console.log(areSame(address1,address3));

function areEqual(address1 , address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(address1 , address2){
    return address1 === address2;
}


//Exercise 4
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'e', body: 'f'},
        {author: 'g', body: 'h'},
    ],
    isLive : true
}

console.log(post);

//Exercise 5
function Post(title, body , author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post('a' , 'b' , 'c');

console.log(post);


//Exercise 6

let priceRanges = [
    {lable: '$' , tooltip: 'Inexpensive' , minPerPerson: 0 , maxPerPErson: 10},
    {lable: '$$' , tooltip: 'Moderate' , minPerPerson: 11 , maxPerPErson: 20},
    {lable: '$$$' , tooltip: 'Expensive' , minPerPerson: 21 , maxPerPErson: 50}
];

let resturents = [
    {averagePErson: 5}
];