import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';  
    const delivery_fees = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate=useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select product size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) { // Added "const" here for better scope
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error("Error counting cart items:", error);
                }
            }
        }
        return totalCount;
    };


const updateQuantity=async(itemId,size,quantity)=>{
    let cartData=structuredClone(cartItems);

    cartData[itemId][size]=quantity;
    setCartItems(cartData);
}


    useEffect(() => {
        
    }, [cartItems]);
 

    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const items in cartItems) {
            // Find product details by product ID
            const itemInfo = products.find((product) => product._id === items);
    
            // Ensure the product exists to avoid accessing undefined properties
            if (!itemInfo) continue;
    
            for (const size in cartItems[items]) {
                try {
                    // Ensure the quantity is valid before performing calculations
                    const quantity = cartItems[items][size];
                    if (quantity > 0) {
                        totalAmount += itemInfo.price * quantity;
                    }
                } catch (error) {
                    console.error(`Error processing cart item: ${items}, size: ${size}`, error);
                }
            }
        }
    
        return totalAmount;
    };
    
    const value = {
        products,
        currency,
        delivery_fees,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,updateQuantity,getCartAmount,navigate // Add getCartCount here
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
