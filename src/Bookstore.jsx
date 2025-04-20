import { useState, useEffect } from "react";
import './Bookstore.css';
export default function Bookstore() {
    const url = "https://solid-spork-7v7x4q7jr43ppqv-5001.app.github.dev/books";
    const [book, setBook] = useState([
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setBook(data.books);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);
    let total = 0;
    cart.forEach(b => total += b.price);
    return (<><header>
        <h1>Book Heaven</h1>
        <p>Your Gateway to Endless Stories</p>
        <nav>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header><div className="page-container">
            <div className="books-container">
                {book.map((b, index) =>
                    <div key={b.id} className="book-item">
                        <img className="book-thumbnail" src={b.image_url} />
                        <div className="book-title">{b.title}</div>
                        <div className="book-author">{b.author}</div>
                        <div className="book-price">{b.price}$</div>
                        <button className="add-cart-btn" onClick={() => setCart([...cart, book[index]])}>Add to cart</button>
                    </div>)
                }
            </div>
            <div className="cart-title">Cart</div>
            <div className="cart-container">
                {cart.map(b => <div className="cart-item">
                    <div className="book-title-cart">{b.title}</div>
                    <div className="book-price-cart">{b.price}</div>
                </div>)}
                <div className="cart-total">Total : {total.toFixed(2)}$</div>
                <button className="clear-cart-btn" onClick={() => setCart([])}>Clear cart</button>
            </div>

        </div></>);
}