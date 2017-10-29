/*
    - Arrays
    Lets create some arrays in some different ways
*/


const emptyArray1 = [];
const emptyArray2 = new Array();

const filledArray1 =  ['cheese', 'flower', 'butter'];
const filledArray2 = new Array('cheese', 'flower');



/* Index */
// Lets get the last item of the array

const lastElement = filledArray1[filledArray1.length - 1];


/* Adding items: Push */
const arrayToManipulate =  ['1', '2', '3', '4'];


// What does this return?
arrayToManipulate.push("6");


/* Adding items: unshift */
arrayToManipulate.unshift("6");


/* Removing items: shift */
arrayToManipulate.shift();


/* Removing items: Pop */
arrayToManipulate.pop();


//console.log(arrayToManipulate);

// How can we remember this?? The longer word in each pair makes the array longer. 


// Exercise:


function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}



function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/*

We are a Storebæltsbroen looking at a queue of cars going to Jylland.
New cars gets added to the queue as cars wait to pass the bridge. 

Create a number of cars you would like. 

1. A new car (of your liking) drives up to the queue. Create a function that can add a car to to the queue and add the car to the queue. 

2. Now a car can cross the bridge, therefore create a function to remove a car from the front of the queue and remove the first car. Log out the car.

3. A car in the back choose another queue. Again create a function for removing a car from the queue and remove the it from the queue.

4. Now log out the number of cars left in the queue. 

5. A policecar needs to quickly get to the front of the queue. Add the relevant function and add the policecar to the front of the queue.

6. Log out the remaining cars in the queue. 

*/


/* Solution */

const cars = generateCars(6);

console.log(cars);

function pushCar(car) {
    return cars.push(car);
}

pushCar(generateCars(1)[0]);


function shiftCar() {
    return cars.shift();
}

const shiftedCar = shiftCar();
console.log(shiftedCar);


function popCar() {
    return cars.pop();
}

popCar();
console.log(cars.length);


function unshiftCar(car) {
    return cars.unshift(car);
}

unshiftCar(generateCars(1)[0]);

console.log(cars);



/* Split */



/* indexof */

const indexOfArray = ['Benjamin', 'Peter', 'William'];

//console.log(indexOfArray.indexOf('Peter'));
//console.log(indexOfArray.indexOf('David'));


/* Slice */

// creates a copy of the array from index 1 to index 3
//console.log(arrayToManipulate.slice(1,3));


/* Reverse */

//console.log(arrayToManipulate);
const reversedArray = arrayToManipulate.reverse().slice();

/* The funny reference thingy */

//console.log(reversedArray);

arrayToManipulate.push(5);

//console.log(reversedArray);
//console.log(arrayToManipulate);




/* Map */

// Creates a new array with the results returned from a function
// Typical used for changing an array

const carColors = cars.map(function(car) {
    return car.color;
});

/*
console.log(carColors);
*/

const isBmw = cars.map(function(car) {
    return car.make === 'BMW';
});

//console.log(isBmw);


/* Filter */

const bmwCars = cars.filter(function(car) {
    return car.make === 'BMW';
});


//console.log(bmwCars);



/* Sort */

// takes a compare function


const quickestCars = cars.sort(function(a, b) {
    //console.log(a);
    //console.log(b);
    // return a.speed - b.speed;
    
    if (b.speed > a.speed) {
        return 1;
    } else {
        return -1;
    }

    return 0;
});

console.log(quickestCars);


/*
    Exercise. 
    
    1. Array of car colors that contain the cars with speed larger than 70, sorted after speed descending.
    2. Array of cars that contains the black cars again sorted after speed.
    3. Find the index of the black car that is of the make bmw.

*/

/* Solution */

const fastCarColors = cars
    .filter((car) => {
        return car.speed > 70;
    })
    .sort((a, b) => {        
        if (b.speed > a.speed) {
            return 1;
        } else {
            return -1;
        }

        return 0;
    })
    .map((car) => {
        return car.color;
    });

/*
console.log(fastCarColors);
*/

const blackCars = cars
    .filter((car) => {
        return car.color === 'Black';
    })
    .sort((a, b) => {        
        if (b.speed > a.speed) {
            return 1;
        } else {
            return -1;
        }

        return 0;
    });

/*
console.log(blackCars);
*/

const blackBmwIndex = cars
    .filter((car) => {
        return car.color === 'Black';
    })
    .map((car) => {
        return car.make;
    })
    .indexOf('BMW');

/*
console.log(blackBmwIndex);
*/

/* Basic dom manipulation */

/* Selecting elements */

const testIdElement = document.getElementById('test-id');
//console.log(testIdElement);

const queueElement = document.querySelector('.queue');
//console.log(listElements);

/* InnerHtml, style, text*/


const a = document.createElement('div')
queueElement.appendChild(a);

/* 
    Exercise 
    
    1. Use the cars array to create an ordered list of cars sorted after car speed.
    2. Create a div with the class car for every car and append it to the div with class queue.
    3. The div should contain have text in the form: The black bmw has a speed of 100 km/h
    4. Style the car div so that is has a height and a width, is floated to the left and has some margin.
    5. Color the car div to the color of the car.


    Extra:

    The opacity of the list should be mapped regarding to the speed, so that the fastest cars has the highest opacity.

*/


/* Solution */

const sortedCars = cars.sort((a, b) => {
    if (b.speed > a.speed) {
        return 1;
    }
});

sortedCars.forEach((car) => {
    let carElement = document.createElement('div');
    carElement.className = "car";
    carElement.innerHTML = `The ${car.color} ${car.make} has a speed of ${car.speed} km/h`;
    carElement.style.backgroundColor = car.color;

    queueElement.appendChild(carElement);
});


