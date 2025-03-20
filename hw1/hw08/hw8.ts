// ==================================task #AiN5CoUQ======================================


function objectCopier(object:any):any {

    if (object) {
        let copiedFunctions:any = []
        for (let item in object) {
            if (typeof object[item] === 'function') {
                let copiedFunc:any = object[item].bind({})
                copiedFunctions.push({copiedFunc, item})
            }
        }

        let copiedObj:any = JSON.parse(JSON.stringify(object))
        for (let func of copiedFunctions) {
            copiedObj[func.item] = func.copiedFunc
        }
        return copiedObj
    }
    throw new Error('Something went wrong')
}

type userType ={
    name:string
    surname:string
    skills:string[]
    greeting?:()=>void
    showSkills?:()=>void
}

let user:userType = {
    name: 'John', surname: 'Doe', skills: ['Html/Css', 'JS', 'Python', 'C++'],
    greeting():void {
        console.log(`Hello World!, my name is ${user.name}`)
    },
    showSkills():void {
        console.log(`My skills are: ${user.skills}`)
    }
}
console.log(user);

let user2:any = objectCopier(user)
console.log(user2)
user2.showSkills()


// ==================================task #AiN5CoUQ======================================

type coursesAndDurationArrayType = {
    title:string
    monthDuration:number
    id?:number
}

let coursesAndDurationArray:coursesAndDurationArrayType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((value:coursesAndDurationArrayType, index:number):coursesAndDurationArrayType => ({id: index + 1, ...value})))