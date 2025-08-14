function displayBestsellers() {
    const container = document.querySelector('#bestsellers .row');
    if (!container) return;

    // Filter books by ID prefix "H" for Home page books
    const homeBooks = allBooks.filter(b => b.id.startsWith("H")).slice(0, 8);
    homeBooks.forEach(book => {
        container.appendChild(createBookCard(book));
    });
}

function displayTrendingBooks() {
    const container = document.querySelector('#trending-books-container');
    if (!container) return;

    const trending = allBooks.filter(b => b.id.startsWith("H")).slice(6, 14);
    trending.forEach(book => {
        const wrapper = document.createElement('div');
        wrapper.className = 'swiper-slide';
        wrapper.appendChild(createBookCard(book));
        container.appendChild(wrapper);
    });
}

// Shared function for creating a book card
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


document.addEventListener('DOMContentLoaded', () => {
    displayBestsellers();
    displayTrendingBooks();
});
