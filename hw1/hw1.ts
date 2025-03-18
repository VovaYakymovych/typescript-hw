//==============================task-1====================================

{
    let a:string = 'hello', b:string  = 'owu', c:string  = 'com', d:string = 'ua', e:number = 1, f:number = 10,
        g:number  = -999, h:number  = 123, i:number  = 3.14, j:number  = 2.7, k:number  = 16, l:boolean = true, m:boolean = false;

    let msg:string = `${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`

    console.log(msg);
}

//==============================task-2====================================

{
    let firstName:string = 'Volodymyr', middleName:string = 'Yurijovych', lastName:string = 'Yakymovych';

    let person:string = `${lastName} ${firstName} ${middleName}`

    console.log(person)
}

//==============================task-3====================================

{
    let a:number = 100;
    let b:string = '100';
    let c:boolean = true;

    console.log('| ', typeof a, a, ' | ', typeof b, b, ' | ', typeof c, c , '  |');
}

//==============================task-3====================================

{
    let firstName = prompt("Введіть ваше ім'я:");
    let middleName = prompt("Введіть ваше по батькові:");
    let age = prompt("Введіть ваш вік:");

    console.log('| ', "Ім'я:", firstName, ' | ', "По батькові:", middleName, ' | ', "Вік:", age, '  |');
}