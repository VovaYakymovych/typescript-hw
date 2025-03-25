


let sessionsList:IVisit[] = JSON.parse(localStorage.getItem('sessionList') || '[]') as IVisit[] ;
let listContainer:HTMLUListElement = document.getElementById('sessionsList') as HTMLUListElement;


if (sessionsList.length === 0) {
    listContainer.innerHTML = "<p>No visits</p>";
} else {
    sessionsList.forEach(visit => {
        let listItem:HTMLLIElement = document.createElement('li');
        listItem.textContent = `Page visited on: ${visit.date}`;
        listContainer.appendChild(listItem);
    });
}
