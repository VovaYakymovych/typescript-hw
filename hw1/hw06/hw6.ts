// ==================================task #dFeorS3m7u======================================


// let stringLength =(items:string[]):void =>{
//   for (let listElement of items) {
//     console.log('element №',items.indexOf(listElement)+1,'length =', listElement.length)
//   }
// }
//
// let listStr:string[] = ['hello world', 'lorem ipsum', 'javascript is cool']
// stringLength(listStr)


// ==================================task #8lld9HMxXWB======================================


// let stringToUp = (items:string[]):void =>{
//   for (let item of items) {
//     console.log('element №',items.indexOf(item)+1, '=', item.toUpperCase())
//   }
// }
//
// let listStr:string[] = ['hello world', 'lorem ipsum', 'javascript is cool']
// stringToUp(listStr)


// ==================================task #ClDsAm7xba7======================================


// let stringToLow = (items:string[]):void =>{
//   for (let item of items) {
//     console.log('element №',items.indexOf(item)+1, '=', item.toLowerCase())
//   }
// }
//
// let listStr:string[] = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// stringToLow(listStr)


// ==================================task #0b89BkYZwu======================================


// let str:string = ' dirty string   '
// console.log(str.trim());


// ==================================task #bfoJuse4ZzP======================================


// let stringToarray =(str:string):void=>{
//   console.log(str.split(' '));
// }
//
// let str:string = 'Ревуть воли як ясла повні';
// stringToarray(str);


// ==================================task #Rbr5kEQ======================================


// let numbers:number[] = [10,8,-7,55,987,-1011,0,1050,0]
// console.log(numbers.map(num => `${num}`));


// ==================================task #5hqyKTfmc======================================


// let sortNums = (array:number[], direction:string):void => {
//   if (direction === 'ascending') {
//     console.log(array.sort((a:number, b:number):number => a - b));
//   }
//   else if (direction === 'descending') {
//     console.log(array.sort((a:number, b:number):number => b - a));
//   }
// }
//
// let nums:number[] = [11, 21, 3];
// sortNums(nums, 'ascending')
// sortNums(nums, 'descending')


// ==================================task #yo06d74c1C======================================

// type coursesAndDurationArrayType2 = {
//     title:string
//     monthDuration:number
//     id?:number
// }
//
// let coursesAndDurationArray2:coursesAndDurationArrayType[] = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortCourses:coursesAndDurationArrayType[] = coursesAndDurationArray2.sort((a,b)=>{
//   return b.monthDuration - a.monthDuration
// })
// console.log(sortCourses)
//
// let filterCourses:coursesAndDurationArrayType[] = coursesAndDurationArray2.filter(value => value.monthDuration>5)
// console.log(filterCourses)
//
// let mappedCourses:coursesAndDurationArrayType[] = coursesAndDurationArray2.map((value, index) => {
//   return {id: index + 1, tittle: value.tittle, monthDuration: value.monthDuration}
// })
// console.log(mappedCourses)


// ==================================task #bolvdlhP======================================


// let suits:string[] = ['spade', 'diamond', 'heart', 'clubs']
// let values:(string|number)[] = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
// let colors:string[] = ['red', 'black']
//
// type cardType={
//     cardSuit:string
//     value:string|number
//     color?:string
// }
// let deck:cardType[] = []
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value}
//         if (suit === 'spade' || suit === 'clubs'){
//             card.color = 'black'
//         }
//         else{
//             card.color = 'red'
//         }
//         deck.push(card)
//     }
// }
//
// function cardFinder(deck:cardType[], callback:any) {
//     return deck.filter(callback)
// }
// console.log('Піковий туз')
// console.log(cardFinder(deck, card => card.value === 'A' && card.cardSuit === 'spade'))
//
// console.log('всі шістки')
// console.log(cardFinder(deck, card => card.value === 6))
//
// console.log('всі червоні')
// console.log(cardFinder(deck, card => card.color === 'red'))
//
// console.log('всі піки')
// console.log(cardFinder(deck, card => card.cardSuit === 'diamond'))
//
// console.log('всі хрести більші за 9')
// console.log(cardFinder(deck, card => card.cardSuit === 'clubs' && (typeof card.value === 'number' ? card.value > 9 : true)))


// ==================================task #EP5I1UUzAX======================================


// let suits: string[] = ['spade', 'diamond', 'heart', 'clubs']
// let values: (string | number)[] = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
// let colors: string[] = ['red', 'black']
//
// type cardType = {
//     cardSuit: string
//     value: string | number
//     color?: string
// }
//
// let deck:cardType[] = []
// for(const suit of suits)
// {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value}
//         if (suit === 'spade' || suit === 'clubs') {
//             card.color = 'black'
//         } else {
//             card.color = 'red'
//         }
//         deck.push(card)
//     }
// }
//
// console.log(deck.reduce((accumulator, card:cardType) => {
//     if (card.cardSuit === 'spade') {
//         accumulator.spades.push(card)
//     } else if (card.cardSuit === 'diamond') {
//         accumulator.diamonds.push(card)
//     } else if (card.cardSuit === 'heart') {
//         accumulator.hearts.push(card)
//     } else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// }, {spades: [], diamonds: [], hearts: [], clubs: []}))


// ==================================task #4LJn7zBx======================================

// type coursesArrayType ={
//     title:string
//     monthDuration:number
//     hourDuration:number
//     modules:string[]
// }
//
// let coursesArray:coursesArrayType[] = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// function courseFinder(array:coursesArrayType[], callback:any):any {
//     let filterArr:coursesArrayType[] = [];
//     for (const item of array) {
//         if (callback(item)) {
//             filterArr.push(item);
//         }
//     }
//     return filterArr;
// }
//
// console.log(courseFinder(coursesArray, (item:coursesArrayType):boolean=>item.modules.includes('sass')))
// console.log(courseFinder(coursesArray, (item:coursesArrayType):boolean=>item.modules.includes('docker')))