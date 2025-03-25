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

  let age:string = inputAge.value

  let existingWarning:HTMLParagraphElement|null = document.getElementById('ageWarning');
  if (existingWarning) {
    existingWarning.remove();
  }

  let warning = document.createElement('p')
  warning.id = 'ageWarning'
  document.body.appendChild(warning)

  if (age === '') {
    warning.textContent = 'Enter your age'
  } else if (age < 18) {
    warning.textContent = 'Your age is below 18'
  }
}


// ==================================task #ymAmN2xJ======================================


// let formUser = document.createElement('form')
// let userName = document.createElement('input')
// let userSurname = document.createElement('input')
// let userAge = document.createElement('input')
// let formUserButton = document.createElement('button')
//
// formUser.append(userName, userSurname, userAge, formUserButton)
// document.body.appendChild(formUser)
//
// formUser.classList.add('form-style-preset')
// userName.id = 'formUserName'
// userSurname.id = 'formUserSurname'
// userAge.id = 'formUserAge'
// userAge.type = 'number'
// formUserButton.classList.add('formButton')
//
// document.querySelectorAll("input").forEach(input => {
//   input.classList.add("formInput");
// });
//
// userName.placeholder = 'Enter your name'
// userSurname.placeholder = 'Enter your surname'
// userAge.placeholder = 'Enter your age'
// formUserButton.innerText = 'Submit'
//
// formUser.onsubmit = function (ev) {
//   ev.preventDefault()
//
//   let user = {
//     name: document.getElementById('formUserName').value,
//     surname: document.getElementById('formUserSurname').value,
//     age: document.getElementById('formUserAge').value
//   };
//
//   let userDataBlock = document.createElement('div');
//   userDataBlock.id = 'userDataBlock';
//
//   userDataBlock.innerHTML = `
//         <p>Name: ${user.name || 'None'}</p>
//         <p>Surname: ${user.surname || 'None'}</p>
//         <p>Age: ${user.age || 'None'}</p>
//     `;
//
//   document.body.appendChild(userDataBlock);
// }


// ==================================task #2VaLt4vDczH======================================


// let counterDiv = document.createElement('div')
// counterDiv.id = 'counter'
// document.body.appendChild(counterDiv)
//
// let counter = localStorage.getItem('pageCounter') ? parseInt(localStorage.getItem('pageCounter')) : 0
//
// counter++
//
// localStorage.setItem('pageCounter', counter)
// document.getElementById('counter').innerText = counter


// ==================================task #LhSfdhM3======================================

// let sessionList = JSON.parse(localStorage.getItem('sessionList'))||[]
// let visit = {date:new Date().toLocaleString()}
//
// sessionList.push(visit)
// localStorage.setItem('sessionList', JSON.stringify(sessionList))


// ==================================task #Jg0gPO00======================================


// let kgInput = document.createElement('input')
// let resultOutput = document.createElement('div')
//
// kgInput.id = 'kgInput'
// kgInput.classList.add('formInput')
// kgInput.placeholder = 'Enter kg amount'
//
// resultOutput.id = 'result'
//
// kgInput.addEventListener('input',function (){
//   let kg = parseFloat(kgInput.value);
//
//   let pounds = kg * 2.20462;
//   resultOutput.textContent = `Weight in pounds: ${pounds.toFixed(2)}`;
// })
//
// document.body.append(kgInput,resultOutput)


// ==================================task #RbQGnH5DuC======================================


// let addToLocalStorage = function (arrayName, objToAdd) {
//
//   let arr = JSON.parse(localStorage.getItem(arrayName)) || [];
//   arr.push(objToAdd)
//
//   localStorage.setItem(arrayName, JSON.stringify(arr))
// }
//
// addToLocalStorage('list1', {name: 'vasya', age: 31})


// ==================================task #kUSgFqWY======================================

// let tableForm = document.createElement('form')
// let rowInput = document.createElement('input')
// let columnInput = document.createElement('input')
// let infoInput = document.createElement('input')
// let tableFormButton = document.createElement('button')
// let tableContainer = document.createElement('div')
//
// tableForm.append(rowInput, columnInput, infoInput, tableFormButton)
// document.body.append(tableForm, tableContainer)
//
// tableForm.classList.add('form-style-preset')
// tableFormButton.classList.add('formButton')
//
// document.querySelectorAll("input").forEach(input => {
//   input.classList.add("formInput")
// })
//
// tableForm.id = 'tableForm'
// rowInput.id = 'rowInput'
// columnInput.id = 'columnInput'
// infoInput.id = 'infoInput'
//
// rowInput.type ='number'
// columnInput.type ='number'
//
// rowInput.placeholder = 'Enter amount of rows'
// columnInput.placeholder = 'Enter amount of columns'
// infoInput.placeholder = 'Enter info to display in table'
// tableFormButton.innerText = 'Submit'
//
// tableForm.onsubmit = function (ev) {
//   ev.preventDefault()
//
//   let rows = parseInt(rowInput.value)
//   let columns = parseInt(columnInput.value)
//   let info = infoInput.value
//
//   tableContainer.innerHTML = ""
//
//   tableContainer.style.display = "grid"
//   tableContainer.style.gridTemplateColumns = `repeat(${columns}, 100px)`
//
//   for (let i = 0; i < rows * columns; i++) {
//     let cell = document.createElement('div')
//     cell.classList.add('cell')
//     cell.innerText = info
//     tableContainer.appendChild(cell)
//   }
// }


// ==================================task #kUSgFqWY======================================

// let container = document.createElement('div')
// let buttonsWrap = document.createElement('div')
// let prevButton = document.createElement('button')
// let nextButton = document.createElement('button')
//
// container.id = 'container'
// buttonsWrap.classList.add('buttons')
// prevButton.id = 'prev'
// nextButton.id = 'next'
//
// prevButton.innerText = 'Prev'
// nextButton.innerText = 'Next'
//
// buttonsWrap.append(prevButton, nextButton)
// document.body.append(container, buttonsWrap)
//
//
// let items = []
// for (let i = 1; i <= 100; i++) {
//   items.push({ id: i, name: "Item " + i })
// }
//
// let currentPage = 0
// let itemsPerPage = 10
//
// function renderItems() {
//   container.innerHTML = ""
//
//   let start = currentPage * itemsPerPage
//   let end = start + itemsPerPage
//   let pageItems = items.slice(start, end)
//
//   pageItems.forEach(item => {
//     let div = document.createElement('div')
//     div.classList.add('item')
//     div.innerText = `${item.id}: ${item.name}`
//     container.appendChild(div)
//   })
//
//   prevButton.disabled = currentPage === 0
//   nextButton.disabled = end >= items.length
// }
//
// prevButton.onclick = function () {
//   if (currentPage > 0) {
//     currentPage--
//     renderItems()
//   }
// }
//
// nextButton.onclick = function () {
//   if ((currentPage + 1) * itemsPerPage < items.length) {
//     currentPage++
//     renderItems()
//   }
// }
//
//
// renderItems()