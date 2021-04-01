function myFunction() {
    let books = [{
        name: "you can win",
        author: "Shiv khera",
        price: 200,
        edition: "1st",

    }, {
        name: "The Secrete",
        author: "Shiv khera",
        price: 400,
        edition: "1st",


    }, {
        name: "power of magic",
        author: "Shiv khera",
        price: 300,
        edition: "1st",


    }, {
        name: "two states",
        author: "Shiv khera",
        price: 100,
        edition: "1st",

    }, ];




    let ulElement = document.querySelector('.list');
    let liElement = document.createElement('li');
    liElement.classList.add('item');

    const tableBody = document.querySelector('.book-table')


    for (let a = 0; a < books.length; a++) {

        const tr = document.createElement('tr')

        const th = document.createElement('th')
        th.setAttribute('scope', 'row')
        th.textContent = a + 1;

        const td1 = document.createElement('td')
        td1.textContent = books[a].name

        const td2 = document.createElement('td')
        td2.textContent = books[a].author

        const td3 = document.createElement('td')
        td3.textContent = books[a].price

        const td4 = document.createElement('td')
        td4.textContent = books[a].edition


        tr.append(th)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)

        tableBody.appendChild(tr)


    }
}


// myFunction()


// function addDetail() {

//     let name = document.querySelector('#name').value;
//     let age = document.querySelector('#age').value;
//     let salary = document.querySelector('#salary').value;

//     let ulElement = document.querySelector('.list');
//     let liElement = document.createElement('li');

//     let nameDiv = document.createElement('div');
//     nameDiv.textContent = name;

//     let ageDiv = document.createElement('div');
//     ageDiv.textContent = age;

//     let salaryDiv = document.createElement('div');
//     salaryDiv.textContent = salary;

//     liElement.append(nameDiv)
//     liElement.append(ageDiv)
//     liElement.append(salaryDiv)



//     ulElement.append(liElement)
//     liElement.setAttribute('list', "style", "border:1px solid green;")


// }