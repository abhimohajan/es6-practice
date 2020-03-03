const age = [10, 20, 15, 19];
const ages1 = [15, 14, 17, 8];
const ages2 = [30, 25, 28, 20];
const allAges = age.concat(ages1).concat([5]).concat(ages2);
const allAges2 = [...age, ...ages1, ...ages2];

// console.log(allAges2);

const business = 550;
const engineer = 750;
const shocib = 450;
// const maximum = Math.max(...business, ...engineer, ...shocib);
const takaPaisa = [550, 750, 450, 850, 950];
const maximum = Math.max(...takaPaisa);
console.log(maximum);