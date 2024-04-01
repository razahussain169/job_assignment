import React, { useState } from 'react';

import img1 from '../assets/hello.jpg';
import img2 from '../assets/pexels-math-90946.jpg';
import img3 from '../assets/pexels-pixabay-279906.jpg';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';


// Define the type for your product
interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}


export const Home = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    // Function to add a product to the cart
    const addToCart = (product: Product) => {
        setOpen(true)
        const existingItem = cartItems.find(item => item.product.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { product, quantity: 1 }]);
        }
    };

    // Function to increase the quantity of a product in the cart
    const increaseQuantity = (productId: number) => {
        setCartItems(cartItems.map(item =>
            item.product.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    // Function to decrease the quantity of a product in the cart
    const decreaseQuantity = (productId: number) => {
        setCartItems(cartItems.map(item =>
            item.product.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    // Function to remove a product from the cart
    const removeFromCart = (productId: number) => {
      setOpen(false)
      setTimeout(() => {
        
          setCartItems(cartItems.filter(item => item.product.id !== productId));
      }, 100);

    };
    
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };
    const products: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            imageUrl: img1,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            imageUrl: img2,
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30,
            imageUrl: img3,
        },
        // Add more products as needed
    ];

    return (
        <>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.imageUrl} alt={product.name} className='w-32 h-auto' />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        
            <Box sx={{ width: 500 }} role="presentation">

            <Drawer open={open} anchor={'right'} onClose={toggleDrawer(false)}>
            <div className="checkout-cart">
                <h2>Shopping Cart</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.product.id}>
                            <img src={item.product.imageUrl} alt={item.product.name} />
                            <div>
                                <p>{item.product.name}</p>
                                <p>${item.product.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => increaseQuantity(item.product.id)}>Increase Quantity</button>
                                <button onClick={() => decreaseQuantity(item.product.id)}>Decrease Quantity</button>
                                <button onClick={() => removeFromCart(item.product.id)}>Remove from Cart</button>

                            </div>
                        </li>
                    ))}
                    <p>Total Price {calculateTotalPrice()}</p>
                </ul>
            </div>
      </Drawer>
      </Box>
                    {/* <CheckoutPage cartItems={cartItems} /> */}

        </>
    );
};
