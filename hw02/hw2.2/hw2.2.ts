
// ======================================task-6=============================================

// let x:number = 0
// if (x===0){
//   console.log('Вірно')
// }
// else{
//   console.log('Невірно')
// }
//
// console.log(line);

// ======================================task-7=============================================


// let time:number = 26
//
// if (time >= 0 && time <= 14){
//   console.log('Перша чверть');
// }
// else if(time >= 15 && time <= 29){
//   console.log('Друга чверть');
// }
// else if(time >= 30 && time <= 44){
//   console.log('Третя чверть');
// }
// else if(time >= 45 && time <= 59){
//   console.log('Четверта чверть');
// }
// else {
//   console.log('Ви ввели число не в проміжку 0-59')
// }


// ======================================task-8=============================================


// let day:number =25
//
// if (day >= 1 && day <= 10){
//   console.log('Перша декада');
// }
// else if(day >= 11 && day <= 20){
//   console.log('Друга декада');
// }
// else if(day >= 21 && day <= 31){
//   console.log('Третя декада');
// }
// else {
//   console.log('Ви ввели число не в проміжку 0-31')
// }



// ======================================task-9=============================================


// let day:string|null = prompt('Введіть день тижня для task-9')
//
// type scheduleType = {
//   monday: string[]
//   tuesday: string[]
//   wednesday: string[]
//   thursday: string[]
//   friday: string[]
//   saturday: string[]
//   sunday: string[]
// }
//
// let schedule:scheduleType = {
//   monday: ['work', 'groceries', 'gym workout'],
//   tuesday: ['work', 'car maintenance', 'house chores'],
//   wednesday: ['gym workout', 'work'],
//   thursday: ['work'],
//   friday: ['work', 'gym workout', 'go out with friends'],
//   saturday: ['work', 'house chores'],
//   sunday: ['go out with friends']
// }
//
// switch (day) {
//   case 'monday':
//   case 'Monday':
//   case 'Понеділок':
//   case 'понеділок':
//   case '1':
//     console.log(schedule.monday);
//     break;
//
//   case 'tuesday':
//   case 'Tuesday':
//   case 'Вівторок':
//   case 'вівторок':
//   case '2':
//     console.log(schedule.tuesday);
//     break;
//
//   case 'wednesday':
//   case 'Wednesday':
//   case 'Середа':
//   case 'середа':
//   case '3':
//     console.log(schedule.wednesday);
//     break;
//
//   case 'thursday':
//   case 'Thursday':
//   case 'Четвер':
//   case 'четвер':
//   case '4':
//     console.log(schedule.thursday);
//     break;
//
//   case 'friday':
//   case 'Friday':
//   case "П'ятниця":
//   case "п'ятниця":
//   case '5':
//     console.log(schedule.friday);
//     break;
//
//   case 'saturday':
//   case 'Saturday':
//   case 'Субота':
//   case 'субота':
//   case '6':
//     console.log(schedule.saturday);
//     break;
//
//   case 'sunday':
//   case 'Sunday':
//   case 'Неділя':
//   case 'неділя':
//   case '7':
//     console.log(schedule.sunday);
//     break;
// }


// ======================================task-10=============================================


// let a = +prompt('Введіть число a');
// let b = +prompt('Введіть число b');
//
// if (a>b){
//   console.log('a', a)
// }
// else if (a<b){
//   console.log('b', b)
// }
// else if (a===b){
//   console.log(' a = b')
// }


// ======================================task-11=============================================

// let x = "";
//
// x = x || 'default';
// console.log(x)
//

// ======================================task-12=============================================

// type coursesAndDurationArrayType ={
//   title:string
//   monthDuration:number
// }
//
// let coursesAndDurationArray:coursesAndDurationArrayType[] = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration>5){
//   console.log(coursesAndDurationArray[0].title, 'Супер!')
// }
// if (coursesAndDurationArray[1].monthDuration>5){
//   console.log(coursesAndDurationArray[1].title, 'Супер!')
// }
// if (coursesAndDurationArray[2].monthDuration>5){
//   console.log(coursesAndDurationArray[2].title, 'Супер!')
// }
// if (coursesAndDurationArray[3].monthDuration>5){
//   console.log(coursesAndDurationArray[3].title, 'Супер!')
// }
// if (coursesAndDurationArray[4].monthDuration>5){
//   console.log(coursesAndDurationArray[4].title, 'Супер!')
// }
// if (coursesAndDurationArray[5].monthDuration>5){
//   console.log(coursesAndDurationArray[5].title, 'Супер!')
// }



// спрощена версія з forEach

// coursesAndDurationArray.forEach(course =>{
//   if (course.monthDuration > 5){
//     console.log('Супер!')
//   }
// })
