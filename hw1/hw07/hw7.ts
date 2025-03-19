// ==================================task #XjJuucOMR0======================================


// function User(id:number, name:string, surname:string, email:string, phone:string) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// type userType ={
//     id:number
//     name:string
//     surname:string
//     email:string
//     phone:string
// }
//
// let users:userType[] = [];
// for (let i = 1; i <= 10; i++) {
//     users.push(new User(
//         i,
//         `Name${i}`,
//         `Surname${i}`,
//         `user${i}@gmail.com`,
//         `+38097123456${i}`
//     ));
// }
// console.log(users);
//
//
// // ==================================task #2ikXsE2WiKZ======================================
//
//
// console.log(users.filter(value => value.id % 2 === 0));
//
//
// // ==================================task #pOeHKct======================================
//
// // // зробив по спаданню, бо початково і так відсортовані за зростанням
// console.log(users.sort((a:userType, b:userType):number => {
//     return b.id - a.id
// }));


// ==================================task #nkMXISv======================================

// function Client(id:number, name:string, surname:string , email:string, phone:string, order:string){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order
// }
//
// type ClientType ={
//     id:number
//     name:string
//     surname:string
//     email:string
//     phone:string
// }
//
// let clients:ClientType[] = [];
//
// for (let i = 1; i <= 10; i++) {
//     let orderSize:number = Math.floor(Math.random() * 5) + 1;
//     let order:string[] = [];
//
//     for (let j = 1; j <= orderSize; j++) {
//         order.push(`Product${j}`);
//     }
//
//     clients.push(new Client(
//         i,
//         `Name${i}`,
//         `Surname${i}`,
//         `client${i}@gmail.com`,
//         `+38097123456${i}`,
//         order
//     ));
// }
// console.log(clients);
//
// // ==================================task #8abtVjRv======================================
//
//
// console.log(clients.sort((a:ClientType, b:ClientType):number => a.order.length - b.order.length));


// ==================================task #vV9a6584I5======================================
// ==================================task #5kla3yMpgp======================================


// class Car{
//     brand:string
//     model:string
//     productionYear:number
//     maxSpeed:number
//     engineVolume:number
//     driver?:object
//
//
//     constructor(brand:string,model:string,productionYear:number,maxSpeed:number,engineVolume:number)
//     {
//         this.brand = brand
//         this.model = model
//         this.productionYear = productionYear
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}км/год`)
//     }
//
//     info(){
//         for (let item in this) {
//             console.log(item, this[item]);
//         }
//     }
//
//     increaseMaxSpeed(newSpeed:number){
//         newSpeed = this.maxSpeed+newSpeed
//         console.log(`Збільшена максимальна швидкість = ${newSpeed}км/год`)
//     }
//
//     changeYear(newProductionYear:number){
//         this.productionYear = newProductionYear
//         console.log(this)
//     }
//
//     addDriver(driver:object){
//         this.driver = driver
//     }
// }
//
// let car1 = new Car('BMW', '340i', 2021, 250, 2995)
// console.log(car1)
//
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2023)
// car1.addDriver({name:'John' , age:21})
// console.log(car1)


// ==================================task #zg6Fifnqig======================================


// class Cinderella{
//     name:string
//     age:number
//     footSize:number
//
//     constructor(name:string, age:number, footSize:number) {
//         this.name = name
//         this.age = age
//         this.footSize = footSize
//     }
// }
// class Prince{
//     name:string
//     age:number
//     shoe:number
//
//     constructor(name:string, age:number, shoe:number) {
//         this.name = name
//         this.age = age
//         this.shoe = shoe
//     }
// }
//
//
//
// let princesses:Cinderella[] = []
//
// for (let i = 1; i <= 10; i++) {
//     let randomFootSize:number = Math.floor(Math.random() * 10) + 34
//     princesses.push(new Cinderella(
//         `Cinderella${i}`,
//         Math.floor(Math.random() * 10) + 18,
//         randomFootSize
//     ))
// }
// console.log(princesses)
//
// let prince:Prince = new Prince('Prince1', 25, 39)
//
// for (let princess of princesses) {
//     if (princess.footSize === prince.shoe) console.log(princess)
// }
//
// function princessFinder(array:Cinderella[], callback) {
//     let filterArr = [];
//     for (const item of array) {
//         if (callback(item)) {
//             filterArr.push(item);
//         }
//     }
//     return filterArr;
// }
//
// console.log(princessFinder(princesses, princess => princess.footSize===prince.shoe))


// ==================================task #gsKLAsNWM======================================


// Array.prototype.myForEach = function (item:any):void {
//     for (let i = 0; i < this.length; i++) {
//         item(this[i],i,this)
//     }
// }
//
// let numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 123, 234, 345];
//
// numbers.myForEach((item:number, index:number, array:number[]):void => {
//     console.log(`item: ${item}, index: ${index}, array: ${array}`);
// });
//
// Array.prototype.myFilter = function (item:any){
//     let filteredItems:any =[]
//     for (let i = 0; i < this.length; i++) {
//         if (item(this[i],i,this)){
//             filteredItems.push(this[i])
//         }
//     }
//     return filteredItems
// }
//
// console.log(numbers.myFilter((item:number, index:number, array:number[]) => item % 2 === 1 && index !== 2));