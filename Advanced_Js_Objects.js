const circle = {

    radius : 10,
    location: {
        x: 1,
        y: 2
    },
    draw : function(){
        console.log('Draw');
    }
}

circle.draw();

//Create Objects Using Factory Function

function createCircle (radius){
    return{
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);

//Create Objects Using Constructor Function

function Circle(radius){
    this.radius = radius;

    //private properties
    let defautLoacation = {x: 0, y:0};


    //Getters and Setters
    Object.defineProperty(this, 'defaultLocation' ,{
        get: function(){
            return defautLoacation;
        },

        set: function(value){
            defautLoacation = value;
        }

    });

    this.draw = function(){
        console.log(draw);
    }
}

const circle2 = new Circle(2);

//calling setter
circle2.defautLoacation = 1;
//calling getter
console.log(circle2.defautLoacation);

for(let key in circle2){
    if(typeof circle2[key] !== 'function')
        console.log(key, circle2[key]);
}

if('radius' in circle2){
    console.log('Circle has a radius');
}

//Exercise StopWatch

function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
         throw new Error('Stopwatch has already started.');

         running = true;

         startTime = new Date();
    };

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not running');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime() / 1000);
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = null;
        duration = 0;
    };

    Object.defineProperty(this , 'duration', {
        get: function(){ return duration;}
    });
}

const sw = new StopWatch();




