fetch("https://striveschool-api.herokuapp.com/books")
    .then(books => {
        if (books.ok) {
            return books.json()
        }
    })
    .then(books => {

        books.forEach(book => {
            const row = document.getElementById("row")
            const card = document.createElement("div")
            card.classList.add("col-lg-4")
            card.classList.add("col-sm-6")
            card.innerHTML = `
        <div class="card mb-3">
        <img src="${book.img}" class="img-fluid" alt="...">
    <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">${book.price}</p>
    <button class="btn btn-success mb-2">Aggiungi al carrello</button>
    <br>
    <button class="btn btn-danger" onclick="deleteCard(event)">Elimina</button>
    </div>
    </div>
        `;
        row.appendChild(card)
        });
        console.log(books)
    })
    .catch(error => console.log(error));

    const deleteCard = event => {
        const bookCard = event.target.closest(".card");
        bookCard.parentNode.remove();
    }