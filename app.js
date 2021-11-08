const form = document.querySelector('form');
const bookList = document.querySelector('#tbody');
const deleteTasksBtn = document.querySelector('#delete-tasks');

//events
form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook);
deleteTasksBtn.addEventListener('click', deleteTasks);

function deleteTasks(event){
    // taskList.innerHTML = '';
    while (bookList.firstChild){
        bookList.removeChild(bookList.firstChild);
    }
}

function deleteBook (event){
    if (event.target.textContent === 'X'){
        if (confirm('Kas kustutada?!')){
            event.target.parentElement.parentElement.remove();
            localStorage.removeItem('book');
        }
    }
}

function addBook(event){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;


    //create <tr> element.
    const tr = document.createElement('tr');
    tr.className = 'collection-item';
    //create <td> elements
       let td1 = document.createElement('td');
       let td1Text = document.createTextNode(title);
       td1.appendChild(td1Text);
       tr.appendChild(td1);

       let td2 = document.createElement('td');
       let td2Text = document.createTextNode(author);
       td2.appendChild(td2Text);
       tr.appendChild(td2);

       let td3 = document.createElement('td');
       let td3Text = document.createTextNode(isbn);
       td3.appendChild(td3Text);
       tr.appendChild(td3);

       let td4 = document.createElement('td');
       const link = document.createElement('a');
       link.setAttribute('href', '#');
       link.appendChild(document.createTextNode('X'));
       td4.appendChild(link);
       tr.appendChild(td4);
    //insert <tr> element into <tbody>
    let table = document.querySelector('tbody');
    table.appendChild(tr);

//add to Local storage
    let book =[title, author, isbn]
    console.log(book);
    localStorage.setItem("book", JSON.stringify(book));

   // console.log(tr);
    event.preventDefault();
}
