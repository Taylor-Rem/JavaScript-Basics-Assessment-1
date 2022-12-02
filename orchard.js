///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// declaring total acres so it can be used later
let totalAcres = 0;

// combining the arrays together allows for different types of trees to easily be added to the totalAcres sum. Also using slice method allows for the original values to be easily modified.
let combinedAcres = [fujiAcres.slice(), galaAcres.slice(), pinkAcres.slice()];

// looping through all arrays
for (let i = 0; i < combinedAcres.length; i++) {
  // looping through numbers in each array. personally decided to use 7 instead of fujiAcres.length
  for (let j = 0; j < 7; j++) {
    // a simple equation which easily retrieves the sum for all numbers contained within combinedAcres. += allows for each loop to continually add on top of itself.
    totalAcres += combinedAcres[i][j];
  }
}
console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// I considered dividing by fujiAcres.length but figured we won't change the number of days in a week any time soon
let averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

while (acresLeft > 0) {
  // if the average ever changes it will be accounted for. Also -= will continue to subtract from acresLeft total.
  acresLeft -= averageDailyAcres;
  days++;
}
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// I decided to declare the "tons" variables inside of this array to allow flexibility and because I don't really see a big downside to doing so. putting these variables inside an array allows them to be looped through and they can still be called later.
let combinedTons = [(fujiTons = []), (galaTons = []), (pinkTons = [])];

// originally the above code looked like this:
// let fujiTons = [] let galaTons = [] let pinkTons = []
// let combinedTons = [fujiTons.splice(), galaTons.splice(), pinkTons.splice(),]

// looping through the combinedTons
for (let i = 0; i < combinedTons.length; i++) {
  // looping through each value in combined tons array
  for (let j = 0; j < 7; j++) {
    // calculates the tons per acre
    combinedTons[i][j] = combinedAcres[i][j] * 6.5;
  }
  //   logs each array
  console.log(combinedTons[i]);
}
// we could also "console.log(fujiTons, galaTons, pinkTons)" here if we wanted to.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// this problem is similar to the last. I used the same solving methods.
let combinedPounds = [(fujiPounds = []), (galaPounds = []), (pinkPounds = [])];

// looping through combinedPounds array
for (let i = 0; i < combinedPounds.length; i++) {
  // looping through values in array
  for (let j = 0; j < 7; j++) {
    // calculates tons to pounds
    combinedPounds[i][j] = combinedTons[i][j] * 2000;
  }
  //   logging results
  console.log(combinedPounds[i]);
}
// again we could "console.log(fujiPounds, galaPounds, pinkPounds)" here if we wanted

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// i'm starting to feel like a broken record at this point

// combined profits and prices to allow looping
let combinedProfit = [(fujiProfit = 0), (galaProfit = 0), (pinkProfit = 0)];
let combinedPrices = [fujiPrice, galaPrice, pinkPrice];

// looping through arrays
for (let i = 0; i < combinedProfit.length; i++) {
  // looping through values in arrays
  for (let j = 0; j < 7; j++) {
    // calculating profit per apple
    combinedProfit[i] += combinedPounds[i][j] * combinedPrices[i];
  }
}
//   logging results
console.log(combinedProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// declaring totalProfit
let totalProfit = 0;

// looping through combinedProfit
for (let i = 0; i < combinedProfit.length; i++) {
  // adding sum of combinedProfit to totalProfit
  totalProfit += combinedProfit[i];
}
// logging results
console.log(totalProfit);
