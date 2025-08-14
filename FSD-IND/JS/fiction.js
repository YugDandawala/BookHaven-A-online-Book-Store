function displayFictionSellers() {
    const container = document.querySelector('#fictionseller .row');
    if (!container) return;

    container.innerHTML = ""; // Clear any old content

    const fictionBooks = allBooks.filter(b => b.id.startsWith("FI")).slice(0, 8);
    fictionBooks.forEach(book => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-md-3 mb-4 d-flex';
        wrapper.appendChild(createBookCard(book));
        container.appendChild(wrapper);
    });
}


function createBookCard(book) {
    const div = document.createElement('div');
    div.className = 'card book-card';
    div.innerHTML = `
        <img src="${book.image}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
            <h5>${book.title}</h5>
            <p>By ${book.author}</p>
            <p style="color:blue">₹${book.price}.00</p>
            <div class="d-flex justify-content-between">
                <button onclick="addToCart('${book.id}')" class="btn btn-primary">Add to Cart</button>
                <button onclick="showBookDetails('${book.id}')" class="btn btn-outline-secondary">Details</button>
            </div>
        </div>
    `;
    return div;
}

document.addEventListener("DOMContentLoaded", displayFictionSellers);
