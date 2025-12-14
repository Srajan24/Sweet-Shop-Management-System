import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [initializedUser, setInitializedUser] = useState(null);

    // Load user's cart from localStorage
    useEffect(() => {
        if (user) {
            const storedCart = localStorage.getItem(`cart_${user.id}`);
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            } else {
                setCart([]);
            }
            setInitializedUser(user.id);
        } else {
            setCart([]);
            setInitializedUser(null);
        }
    }, [user]);

    // Persist cart to localStorage
    useEffect(() => {
        if (user && initializedUser === user.id) {
            localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
        }
    }, [cart, user, initializedUser]);

    const addToCart = (product, quantity, weight = '1kg') => {
        if (!user) return;

        const cartItemId = `${product._id}-${weight}`;
        const priceMultiplier = weight === '250g' ? 0.25 : weight === '500g' ? 0.5 : 1;
        const adjustedPrice = product.price * priceMultiplier;

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.cartItemId === cartItemId);
            if (existingItem) {
                // Update quantity if item already in cart
                return prevCart.map(item =>
                    item.cartItemId === cartItemId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            // Add new item to cart
            return [...prevCart, {
                ...product,
                quantity,
                weight,
                price: adjustedPrice,
                originalPrice: product.price,
                cartItemId
            }];
        });
    };

    const removeFromCart = (cartItemId) => {
        setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
    };

    const updateQuantity = (cartItemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(cartItemId);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
