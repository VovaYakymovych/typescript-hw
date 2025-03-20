// ================================task-#y7crMeFwHcS====================================


// for (let i:number = 0; i < 10; i++){
//   document.write(`
//     <div> qwerty </div>
//   `)
// }


// ================================task-#TYj7ncx====================================


// for (let i:number = 0; i < 10; i++){
//   document.write(`
//   <div>${i + 1} - qwerty</div>
//   `)
// }


// ================================task-#uzkt71dp====================================

// let i:number = 0;
//
// while (i < 20){
//   document.write(`
//   <h1> qwerty </h1>
//   `)
//   i++;
// }


// ================================task-#OeT7t3uUMFi====================================

// let i:number = 0;
//
// while (i < 20){
//   document.write(`
//   <h1>${i + 1} qwerty </h1>
//   `)
//   i++;
// }


// ================================task-#vLSZKMlO====================================


// let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (let i of listOfItems) {
//   document.write(`
//     <li> ${i} </li>
//   `)
// }
// document.write(`</ul>`)


// ================================task-#Hdjws7E====================================

// type productsType ={
//     title: string
//     price: number
//     image: string
// }
//
// let products:productsType[] = [
//   {
//     title: 'Milk',
//     price: 22,
//     image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//   },
//   {
//     title: 'Juice',
//     price: 27,
//     image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//   },
//   {
//     title: 'Tomato',
//     price: 47,
//     image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//   },
//   {
//     title: 'Tea',
//     price: 15,
//     image: 'https://images.ctfassets.net/e8bhhtr91vp3/u57hlD2mehS7ea03vStqA/7cf1b42f85ac8c6ca43711c7c52a78ec/PNG-LPT_100ct_Plunge_2022_5000x5000.webp?w=800&q=70'
//   },
// ];
//
// document.write(`<div class="wrapper">`)
// for (let product of products) {
//   document.write(`
//     <div class = "product-card">
//         <h3 class="product-title">${product.title}. Price - ${product.price} $</h3>
//
//         <img src=${product.image} alt="" class="product-image">
//     </div>
//
//   `)
// }
// document.write(`</div>`)


// ================================task-#4WrHwFTEop0====================================

// type usertype ={
//     name: string
//     age: number
//     status: boolean
// }
//
// let users:usertype[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log('========Users with age > 30=========')
// for (let user of users) {
//
//     if (user.age > 30) {
//         console.log(user.name, user.age)
//     }
// }
// console.log('========Users with status true=========')
// for (let user of users) {
//     if (user.status) {
//         console.log(user.name, user.status)
//     }
// }
// console.log('========Users with status false=========')
// for (let user of users) {
//     if (!user.status) {
//         console.log(user.name, user.status)
//     }
// }