import { useState } from 'react';
import productOne from './assets/product1.png';
import productTwo from './assets/product2.png';
import productThree from './assets/product3.png';
import productFour from './assets/product4.png';
import productFive from './assets/product5.png';
import productSix from './assets/product6.png';
import productSeven from './assets/product7.png';
import productEight from './assets/product8.png';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
   const [cart, setCart] = useState([]);
   const [page, setPage] = useState(PAGE_PRODUCTS);
   const [products] = useState([
      {
         name: 'Vintage Typewriter to post awesome stories about UI design and webdev',
         cost: '$49.50',
         image: productOne,
      },
      {
         name: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping',
         cost: '$19.95',
         image: productTwo,
      },
      {
         name: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
         cost: '$128.99',
         image: productThree,
      },
      {
         name: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
         cost: '$12.48',
         image: productFour,
      },
      {
         name: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
         cost: '$69.50',
         image: productFive,
      },
      {
         name: 'Prototyping items to create a lot if useless things',
         cost: '$13.90',
         image: productSix,
      },
      {
         name: 'John Von Ebalkin SPRING ',
         cost: '$35.75',
         image: productSeven,
      },
      {
         name: 'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
         cost: '$20.99',
         image: productEight,
      },
   ]);

   const addToCart = (product) => {
      console.log('we are in add to cart state');
      setCart([...cart, { ...product }]);
   };

   const navigateTo = (nextPage) => {
      setPage(nextPage);
   };

   const removeFromCart = (productToRemove) => {
      setCart(cart.filter((product) => product !== productToRemove));
   };

   const renderProducts = () => (
      <>
         <div className="products-cont">
            {products.map((product, id) => (
               <div className="products" key={id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="cost">{product.cost}</p>
                  <button className="cart" onClick={() => addToCart(product)}>
                     Add to cart
                  </button>
               </div>
            ))}
         </div>
      </>
   );

   const renderCart = () => (
      <>
         <p>{cart.length === 0 ? 'Cart is empty' : ''}</p>
         <div className="products-cont">
            {cart.map((product, id) => (
               <div className="products" key={id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="cost">{product.cost}</p>
                  <button className="cart" onClick={() => removeFromCart(product)}>
                     Remove
                  </button>
               </div>
            ))}
         </div>
      </>
   );

   return (
      <div className="App">
         <div className="container">
            <button onClick={() => navigateTo(PAGE_CART)} className="go-to-cart-btn">
               View Cart ({cart.length})
            </button>
            <button onClick={() => navigateTo(PAGE_PRODUCTS)} className="go-to-cart-btn">
               View Products
            </button>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
         </div>
      </div>
   );
}

export default App;
