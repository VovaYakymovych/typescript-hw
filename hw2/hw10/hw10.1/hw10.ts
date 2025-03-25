// ==================================task #sH8c4er======================================


let text:HTMLParagraphElement = document.createElement('p')
text.id = 'text'
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, fuga.'
console.log(text);

let btn:HTMLButtonElement = document.createElement('button')
btn.classList.add('buttonTask1')
btn.innerText = 'text delete'
document.body.append(text, btn)

btn.onclick = function ():void {
  text.remove()
}


// ==================================task #j693ca8======================================


let formAge:HTMLFormElement = document.createElement('form')
let inputAge:HTMLInputElement = document.createElement('input')
let formButton:HTMLButtonElement = document.createElement('button')

formAge.append(inputAge, formButton)
document.body.appendChild(formAge)

formAge.id = 'formAge'
inputAge.id = 'formInputAge'
inputAge.type = 'number'
inputAge.classList.add('formInput')
formButton.classList.add('formButton')

inputAge.placeholder = 'Enter your age'
formButton.innerText = 'Submit'

formAge.onsubmit = function (ev:SubmitEvent):void {
  ev.preventDefault()

  let ageInput:HTMLInputElement = document.getElementById('inputAge') as HTMLInputElement
  let age: number = parseInt(ageInput.value, 10)

  let existingWarning:HTMLParagraphElement = document.getElementById('ageWarning') as HTMLParagraphElement
  if (existingWarning) {
    existingWarning.remove()
  }

  let warning:HTMLParagraphElement = document.createElement('p')
  warning.id = 'ageWarning'
  document.body.appendChild(warning)

  if (isNaN(ageInput.valueAsNumber)) {
    warning.textContent = 'Enter your age'
  } else if (age < 18) {
    warning.textContent = 'Your age is below 18'
  }
}


// ==================================task #ymAmN2xJ======================================


let formUser:HTMLFormElement = document.createElement('form')
let userName:HTMLInputElement = document.createElement('input')
let userSurname:HTMLInputElement = document.createElement('input')
let userAge:HTMLInputElement = document.createElement('input')
let formUserButton:HTMLButtonElement = document.createElement('button')

formUser.append(userName, userSurname, userAge, formUserButton)
document.body.appendChild(formUser)

formUser.classList.add('form-style-preset')
userName.id = 'formUserName'
userSurname.id = 'formUserSurname'
userAge.id = 'formUserAge'
userAge.type = 'number'
formUserButton.classList.add('formButton')

document.querySelectorAll("input").forEach(input => {
  input.classList.add("formInput");
});

userName.placeholder = 'Enter your name'
userSurname.placeholder = 'Enter your surname'
userAge.placeholder = 'Enter your age'
formUserButton.innerText = 'Submit'

interface IUser4{
  name:string
  surname:string
  age:number
}

formUser.onsubmit = function (ev:SubmitEvent):void {
  ev.preventDefault()

  let nameInput:HTMLInputElement = document.getElementById('formUserName') as HTMLInputElement
  let surnameInput:HTMLInputElement = document.getElementById('formUserSurname') as HTMLInputElement
  let ageInput:HTMLInputElement = document.getElementById('formUserAge') as HTMLInputElement

  let user: IUser4 = {
    name: nameInput.value.trim(),
    surname: surnameInput.value.trim(),
    age: parseInt(ageInput.value, 10)
  };

  let userDataBlock:HTMLDivElement = document.createElement('div');
  userDataBlock.id = 'userDataBlock';

  userDataBlock.innerHTML = `
        <p>Name: ${user.name || 'None'}</p>
        <p>Surname: ${user.surname || 'None'}</p>
        <p>Age: ${user.age || 'None'}</p>
    `;

  document.body.appendChild(userDataBlock);
}


// ==================================task #2VaLt4vDczH======================================


let counterDiv:HTMLDivElement = document.createElement('div');
counterDiv.id = 'counter';
document.body.appendChild(counterDiv);

let counter: number = parseInt(localStorage.getItem('pageCounter') || '0', 10);

counter++;
localStorage.setItem('pageCounter', counter.toString());

counterDiv.innerText = counter.toString();



// ==================================task #LhSfdhM3======================================

interface IVisit {
  date: string;
}

let sessionList:IVisit[] = JSON.parse(localStorage.getItem('sessionList')||'[]') as IVisit[]
let visit:IVisit = {date:new Date().toLocaleString()}

sessionList.push(visit)
localStorage.setItem('sessionList', JSON.stringify(sessionList))


// ==================================task #Jg0gPO00======================================


let kgInput:HTMLInputElement = document.createElement('input')
let resultOutput:HTMLDivElement = document.createElement('div')

kgInput.id = 'kgInput'
kgInput.classList.add('formInput')
kgInput.placeholder = 'Enter kg amount'

resultOutput.id = 'result'

kgInput.addEventListener('input',function ():void{
  let kg:number = parseFloat(kgInput.value);

  let pounds:number = kg * 2.20462;
  resultOutput.textContent = `Weight in pounds: ${pounds.toFixed(2)}`;
})

document.body.append(kgInput,resultOutput)


// ==================================task #RbQGnH5DuC======================================

interface IUser5 {
  name:string
  age:number
}

function addToLocalStorage (arrayName:string, objToAdd:IUser5):void {

  let arr:IUser5[] = JSON.parse(localStorage.getItem(arrayName) || '[]') as IUser5[]
  arr.push(objToAdd)

  localStorage.setItem(arrayName, JSON.stringify(arr))
}

addToLocalStorage('list1', {name: 'vasya', age: 31})


// ==================================task #kUSgFqWY======================================

let tableForm:HTMLFormElement = document.createElement('form')
let rowInput:HTMLInputElement = document.createElement('input')
let columnInput:HTMLInputElement = document.createElement('input')
let infoInput:HTMLInputElement = document.createElement('input')
let tableFormButton:HTMLButtonElement = document.createElement('button')
let tableContainer:HTMLDivElement = document.createElement('div')

tableForm.append(rowInput, columnInput, infoInput, tableFormButton)
document.body.append(tableForm, tableContainer)

tableForm.classList.add('form-style-preset')
tableFormButton.classList.add('formButton')

document.querySelectorAll("input").forEach(input => {
  input.classList.add("formInput")
})

tableForm.id = 'tableForm'
rowInput.id = 'rowInput'
columnInput.id = 'columnInput'
infoInput.id = 'infoInput'

rowInput.type ='number'
columnInput.type ='number'

rowInput.placeholder = 'Enter amount of rows'
columnInput.placeholder = 'Enter amount of columns'
infoInput.placeholder = 'Enter info to display in table'
tableFormButton.innerText = 'Submit'

tableForm.onsubmit = function (ev:SubmitEvent):void {
  ev.preventDefault()

  let rows:number = parseInt(rowInput.value)
  let columns:number = parseInt(columnInput.value)
  let info:string = infoInput.value

  tableContainer.innerHTML = ""

  tableContainer.style.display = "grid"
  tableContainer.style.gridTemplateColumns = `repeat(${columns}, 100px)`

  for (let i:number = 0; i < rows * columns; i++) {
    let cell:HTMLDivElement = document.createElement('div')
    cell.classList.add('cell')
    cell.innerText = info
    tableContainer.appendChild(cell)
  }
}


// ==================================task #kUSgFqWY======================================

let container:HTMLDivElement = document.createElement('div')
let buttonsWrap:HTMLDivElement = document.createElement('div')
let prevButton:HTMLButtonElement = document.createElement('button')
let nextButton:HTMLButtonElement = document.createElement('button')

container.id = 'container'
buttonsWrap.classList.add('buttons')
prevButton.id = 'prev'
nextButton.id = 'next'

prevButton.innerText = 'Prev'
nextButton.innerText = 'Next'

buttonsWrap.append(prevButton, nextButton)
document.body.append(container, buttonsWrap)

type itemsType ={
  id:number
  name:string
}

let items:itemsType[] = []
for (let i:number = 1; i <= 100; i++) {
  items.push({ id: i, name: "Item " + i })
}

let currentPage:number = 0
let itemsPerPage:number = 10

function renderItems():void {
  container.innerHTML = ""

  let start:number = currentPage * itemsPerPage
  let end:number = start + itemsPerPage
  let pageItems:itemsType[] = items.slice(start, end)

  pageItems.forEach(item => {
    let div:HTMLDivElement = document.createElement('div')
    div.classList.add('item')
    div.innerText = `${item.id}: ${item.name}`
    container.appendChild(div)
  })

  prevButton.disabled = currentPage === 0
  nextButton.disabled = end >= items.length
}

prevButton.onclick = function ():void {
  if (currentPage > 0) {
    currentPage--
    renderItems()
  }
}

nextButton.onclick = function ():void {
  if ((currentPage + 1) * itemsPerPage < items.length) {
    currentPage++
    renderItems()
  }
}

renderItems()