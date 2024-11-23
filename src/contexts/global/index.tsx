import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Cart } from "../../models/cart";
import { Product } from "../../models/product";
import { ReactTypes, SideMenuTitleMapper } from "../../shared/constants";
import { Order } from "../../models/order";

type GlobalContextTypes = {
    contentType: SideMenuTitleMapper;
    setContentType: Dispatch<SetStateAction<SideMenuTitleMapper>>;
    isSideMenuOpen: boolean;
    setIsSideMenuOpen: Dispatch<SetStateAction<boolean>>;
    setProductDetail: (product: Product, title: SideMenuTitleMapper) => void;
    selectedItem: Product | null;
    setSelectedItem: Dispatch<SetStateAction<Product | null>>;
    cartItems: Cart[] | [];
    setCartItems: Dispatch<SetStateAction<Cart[] | []>>;
    addCartItem: (cartItem: Cart, title: SideMenuTitleMapper) => void;
    updateQuantity: (productId: number, newQuantity: number) => void;
    removeCartItem: (productId: number) => void;
    getTotalPrice: (cartItems: Cart[]) => number;
    orders: Order[] | [];
    setOrders: Dispatch<SetStateAction<Order[] | []>>;
}
const GlobalContext = createContext<GlobalContextTypes | null>(null);

function GlobalProvider({children}: ReactTypes) {
    
    // Set content type
    const [contentType, setContentType] = useState<SideMenuTitleMapper>(SideMenuTitleMapper.None);

    // Open/Close side menu
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const setProductDetail = (product: Product, title: SideMenuTitleMapper) => {
        setSelectedItem(product);
        setContentType(title);
    }

    // Set product detail data
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);

    // Set cart items
    const [cartItems, setCartItems] = useState<Cart[] | []>([]);
    const addCartItem = (cartItem: Cart, title: SideMenuTitleMapper) => {
        // const updatedCart = [...cartItems, cartItem];  //Para poder usar el siguiente estado ya que la actualización no afecta la variable 
        // console.log('Updated Cart: ', updatedCart);     //cartItems en el controlador de evento que ya se está ejecutando
        setCartItems([...cartItems, cartItem]);
        setContentType(title);
    }
    const removeCartItem = (productId: number) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId)
        console.log('Updated Cart: ', updatedCart);
        setCartItems(updatedCart);
    }

    // Set cart items quantity
    const updateQuantity = (productId: number, newQuantity: number) => {
        const updatedCartItem = cartItems.map((item) => 
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        console.log('Updated Cart: ', updatedCartItem);
        setCartItems(updatedCartItem);
    }

    // Set cart total price
    const getTotalPrice = (cartItems: Cart[]) => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Set orders
    const [orders, setOrders] = useState<Order[] | []>([]);

    return (
        <GlobalContext.Provider value={{
            contentType,
            setContentType,
            isSideMenuOpen,
            setIsSideMenuOpen,
            setProductDetail,
            selectedItem,
            setSelectedItem,
            cartItems,
            setCartItems,
            addCartItem,
            updateQuantity,
            removeCartItem,
            getTotalPrice,
            orders,
            setOrders,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }