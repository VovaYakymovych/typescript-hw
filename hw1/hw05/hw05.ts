//===================================task - #I2XsG6f=======================================


// let squareArea = (a:number,b:number):number => a*b;
// console.log('a*b=',squareArea(10,20))


//===================================task - #ETGAxbEn8l=======================================


// let circleArea = (r:number):number => Math.PI*Math.pow(r,2)
// console.log('Pi*r^2=',circleArea(15))


//===================================task - #Mbiz5K4yFe7=======================================


// let cylinderArea = (r:number,h:number):number => Math.PI*r*h*2
// console.log('2Pi*r*h =',cylinderArea(15,25))


//===================================task - #SIdMd0hQ=======================================


// let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// let listCout = (list:string[]):void => {for (let listElement of list) {console.log(listElement)} }
// listCout(listOfItems)


//===================================task - #59g0IsA=======================================


// let paragraph = (par:string):void => document.write(`<p>${par}</p>`)
//
// paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//      'Deleniti dolor exercitationem magnam quibusdam. Accusantium autem fuga fugit itaque ' +
//      'minima pariatur rem rerum. Deleniti minima, vero.')
//
//
// //===================================task - #hOL6126=======================================
//
//
// let createUl = (text:string):void => document.write(`
//            <ul>
//              <li>${text}</li>
//             <li>${text}</li>
//              <li>${text}</li>
//            </ul>
//          `)
//
//
// createUl('qwerty')


//===================================task - #0Kxco1edSN=======================================


// let createUl_v2 = (text:string,li_count:number):void => {
//     document.write(`<ul>`)
//          for (let i:number = 0; i<li_count; i++){
//              document.write(`<li>${text}</li>`)
//          }
//      document.write(`</ul>`)
// }
//
// createUl_v2('qwerty', 15)


//===================================task - #gEFoxMMO=======================================


// let createUl_v3 =(list:(string|number|boolean)[]):void =>{
//     document.write(`<ul>`)
//         for (let i = 0; i<list.length; i++){
//             let listElement:string|number|boolean = list[i]
//             document.write(`<li>${listElement}</li>`)
//         }
//     document.write(`</ul>`)
// }
//
// let lst:(string|number|boolean)[] = [true, 3, 'a', false, 123, 65, 'qwe', 'asd', true, 1]
// createUl_v3(lst)


//===================================task - #bovDJDTIjt=======================================


// let arrCout = (arr:any[]):void => {
//     for (let arrElement of arr) {
//         document.write(`
//         <div class = "people">
//             <p>id = ${arrElement.id}</p>
//             <p>Name = ${arrElement.name}</p>
//             <p>Age = ${arrElement.age}</p>
//         </div>
//         `)
//     }
// }
// type peopleType ={
//     id:number
//     name:string
//     age:number
// }
// let people:peopleType[] = [
//     { id: 1, name: "Олександр", age: 25 },
//     { id: 2, name: "Марія", age: 30 },
//     { id: 3, name: "Іван", age: 22 },
//     { id: 4, name: "Андрій", age: 28 },
//     { id: 5, name: "Ольга", age: 26 },
//     { id: 6, name: "Василь", age: 35 },
//     { id: 7, name: "Наталя", age: 29 },
//     { id: 8, name: "Дмитро", age: 31 },
//     { id: 9, name: "Світлана", age: 27 },
//     { id: 10, name: "Богдан", age: 24 }]
//
// arrCout(people);


//===================================task - #pghbnSB=======================================


// let returnMin = (list:number[]):number =>{
//     let min = list[0];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < min) {
//             min = list[i];
//         }
//     }
//     return min;
// }
//
// let num:number[] =[11, 12, -2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(returnMin(num))


//===================================task - #EKRNVPM=======================================


// let sumArr = (list:number[]):number => {
//     let sum:number = 0
//     for (let i:number = 0; i < list.length; i++){
//         sum +=list[i]
//     }
//     return sum
// }
//
// let num:number[] =[11, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(sumArr(num))


//===================================task - #kpsbSQCt2Lf=======================================


// let swapElements = (list:number[], index1:number, index2:number):void => {
//     for (let i:number = 0; i < list.length; i++) {
//             if (i === index1) {
//                 let a:number = list[i];
//                 list[i] = list[index2];
//                 list[index2] = a;
//                 break;
//             }
//     }}
//
// let num:number[] =[11, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// swapElements(num, 0, 1)
// console.log(num)


//===================================task - #mkGDenYnNjn=======================================


// let currencyExchange =() => {
//     let currency1 = prompt('Choose your currency(UAH, USD, EUR)').toUpperCase();
//     let sum_currency1 = +prompt('Enter Amount');
//     let currency2 = prompt('Choose currency you want to get(UAH, USD, EUR)').toUpperCase();
//
//     let exchangeRates = {
//         UAH: { USD: 1 / 42, EUR: 1 / 44, UAH: 1 },
//         USD: { UAH: 42, EUR: 1 / 1.03, USD: 1 },
//         EUR: { UAH: 44, USD: 1.03, EUR: 1 }
//     }
//
//     let convertedAmount = sum_currency1 * exchangeRates[currency1][currency2];
//     return `${sum_currency1} ${currency1} = ${convertedAmount} ${currency2}`;
// }
//
// document.write(currencyExchange())