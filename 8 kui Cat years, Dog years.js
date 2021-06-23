//Kata Task
// I have a cat and a dog.
//
// I got them at the same time as kitten/puppy. That was humanYears years ago.
//
// Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//мое решение
let humanYearsCatYearsDogYears = function(humanYears) {
    let cat1= 15;
    let cat2 = 9;
    let cat3 = 4;
    let dog1= 15;
    let dog2 = 9;
    let dog3 = 5;
    let arr = [humanYears]
    humanYears === 1 ? arr.push(cat1):humanYears === 2 ? arr.push(cat1+cat2) : humanYears >= 3 ? arr.push((cat1+cat2) + (humanYears-2)*cat3):0
    humanYears === 1 ? arr.push(dog1):humanYears === 2 ? arr.push(dog1+dog2) : humanYears >= 3 ? arr.push((cat1+cat2) + (humanYears-2)*dog3):0
    return arr;
}

//-------------решение других пользователей ------------------------//

const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];

function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
        case 1:
            return [1, 15, 15]
        case 2:
            return [2, 24, 24];
        default:
            return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }

}
