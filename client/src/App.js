import React, { useState } from 'react';
import './components/header/shoes.css';
import './shoes.css';
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
function ProductCard({ image, name, price, large }) {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = () => {
    const priceNumeric = parseFloat(price.split('$')[1]);
    const existingItemIndex = cartItems.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      const newItem = { name, price: priceNumeric, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className='newimg'>
      <div className={`product-card${large ? ' large' : ''}`}>
        <img src={image} alt={name} style={{ width: '200px', height: '200px', display: 'flex' }} />
        <div className="product-info">
          <h4 className="product-name">{name}</h4> {/* Add a class for styling */}
          <p className="price">{price}</p>
        </div>
        <div className="product-actions">
          <button className="btn-add-to-cart" onClick={() => { addToCart(); toggleCart(); }}>
            <IoCart /> Add to Cart
          </button>
        </div>
      </div>
      {showCart && (
        <div id="cart" className="cart-content">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={image} alt={name} style={{ width: '50px', height: '50px' }} />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <p>Total Quantity: {calculateTotalQuantity()}</p>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <div className='pay'><p>Checkout Now</p></div>
          <button className="btn-back" onClick={closeCart}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}


function App() {
  // Define an array of products with individual information
  const products = [
    { image: "/dunk1.png", name: "Nike Dunk Low", price: "MRP : $201.33" },
    { image: "/dunk2.png", name: "Nike Dunk Retro", price: "MRP : $140.56" },
    { image: "/dunk3.png", name: "Nike Dunk Low", price: "MRP : $120.99" },
    { image: "/dunk4.png", name: "Nike Dunk Retro SE", price: "MRP : $200.7" },
    { image: "/dunk5.png", name: "Nike Dunk Low ", price: "MRP : $207.77" },
    { image: "/dunk7.png", name: "Nike Dunk High Premium", price: "MRP : $205.5" },
    { image: "/club-unstructured-dunk-patch-cap-t1WML6.jpeg", name: "Nike Club", price: "MRP : $202.99" },
    { image: "/dunk9.png", name: "Nike Dunk Low", price: "MRP : $205.4" },
    { image: "/dunk6.png", name: "Nike Dunk Low Retro", price: "MRP : $201" },
    { image: "/dunk10.png", name: "Nike Dunk Mid", price: "MRP : $101" },
    { image: "/dunk11.png", name: "Nike Dunk Low", price: "MRP : $121" },
    { image: "/dunk12.png", name: "Nike Dunk Mid", price: "MRP : $221" },
    // Add more products as needed
  ];
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    
    <div>
    
      <div>
      
      <div className='yoi'>
      <input 
        type="text" 
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      /> </div>
       <div className='logo'>
              <img src="/0139937c2f641ab61fd020844ccfd459.jpg" alt="logo" />
          </div>
      
       <div className='nav2'>
          <p>New Arrivals</p>
          <p>Men</p>
          <p>Women</p>
          <p>Apparel</p>
          
          <p>Trending</p>
        </div>
      <div className="products-container">
        {filteredProducts.map((product, index) => (
          <ProductCard 
            key={index} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
          /> 
        ))}
      </div>
      <div/>
    </div>
      <div className="filter-container">
      <h2>Filter Options</h2>
      <div className="filter-options">
        <div className="filter-category">
          <label htmlFor="kids">Kids:</label>
          <select id="kids">
          
            <option value="all">All</option>
            <option value="boys">Boys</option>
            <option value="girls">Girls</option>
          </select>
        </div>
        <div className="filter-category">
          <label htmlFor="age">Age Range:</label>
          <select id="age">
            <option value="all">All</option>
            <option value="0-3">0-3 years</option>
            <option value="4-7">4-7 years</option>
            <option value="8-12">8-12 years</option>
          </select>
        </div>
        <div className="filter-category">
          <label htmlFor="price">Price Range:</label>
          <input type="range" id="price" name="price" min="0" max="1000" />
          <span id="price-value">$0 - $1000</span>
        </div>
        <div className="filter-category">
          <label htmlFor="sports">Sports:</label>
          <select id="sports">
            <option value="all">All</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="running">Running</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </div>
        <div className="filter-category">
          <label htmlFor="sale">On Sale:</label>
          <input type="checkbox" id="sale" name="sale" />
          
        </div>
        <div className="filter-category">
          <label htmlFor="color">Color:</label>
          <div id="color">
            <span className="color-option black"></span>
            <span className="color-option white"></span>
            {/* Add more color options as needed */}
          </div>
        </div>
        <div className="filter-category">
          <label htmlFor="athlete">Athlete:</label>
          <select id="athlete">
            <option value="all">All</option>
            <option value="LeBron James">LeBron James</option>
            {/* Add more athlete options as needed */}
          </select>
        </div>
        <div className="filter-category">
          <label htmlFor="height">Shoe Height:</label>
          <select id="height">
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="filter-category">
          <label htmlFor="technology">Technology:</label>
          <select id="technology">
            <option value="all">All</option>
            <option value="Air Max">Air Max</option>
            <option value="Flyknit">Flyknit</option>
            {/* Add more technology options as needed */}
          </select>
          {/* Please, don't do anything while I'm working okkk */}
        </div>
      </div>
    </div>
      {/* Render product cards */}
      <div className="product-container">
        {[...Array(Math.ceil(products.length / 3))].map((_, rowIndex) => (
          <div key={rowIndex} className="product-row">
            {/* Render three product cards in each row */}
            {products.slice(rowIndex * 3, (rowIndex + 1) * 3).map((product, index) => (
              <ProductCard 
                key={index}
                image={product.image} 
                name={product.name} 
                price={product.price} 
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className='Hide'>Hide Filters</div>
      <div class="related-stories">
  <h2>Related Stories</h2>
  <div class="story-container">
    <div class="story2">
      <img src="/the-best-nike-shoes-for-kids.jpg"  alt="Nike Shoes for Kids" class="image1"/>
      <div class="story-info1">  
        <h3>The Best Nike Shoes for Kids</h3>
        <p>Buying Guide</p>
      </div>
    </div>
    <div class="story1">  
   <div className='imgh'><img src="/how-to-measure-your-foot-to-find-the-right-shoe-size.jpg" alt="Measure Your Foot" class="image2"/>
     </div> <div class="story-info">
       <h3>Measure Foot to Find the Right Shoe Size</h3> 
        <p>Buying Guide</p>
      </div>
    </div>
  </div>
</div>

      <footer className="custom-footer">
        <div className="custom-container">
          <div className="custom-column">
            <h3>COMPANY</h3>
            <p>About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
          <div className="custom-column">
            <h3>HELP</h3>
            <p>Get help</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Return</p>
          </div>
          <div className="custom-column">
            <h3>FIND A STORE</h3>
            <p>Become A Member</p>
            <p>Send Us Feedback</p>
          </div>
          <div className="custom-column">
            <h3>BECOME A MEMBER</h3>
            <p>Sign up for exclusive offers</p>
            <p>Join Now</p>
          </div>
        </div>
        <div className="custom-horizontal-line"></div>
        <div className="custom-footer-bottom">
          <div className="custom-container">
            <div className='do'> 
              <p>&copy; 2024 Nike, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
