import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Cart } from "../../models/cart";
import { Product } from "../../models/product";
import { ReactTypes, SideMenuTitleMapper } from "../../shared/constants";

type GlobalContextTypes = {
    contentType: SideMenuTitleMapper;
    isSideMenuOpen: boolean;
    showProductDetail: (product: Product, title: SideMenuTitleMapper) => void;
    closeSideMenu: () => void;
    selectedItem: Product | null;
    setSelectedItem: Dispatch<SetStateAction<Product | null>>;
    cartItems: Cart[] | [];
    addCartItem: (cartItem: Cart, title: SideMenuTitleMapper) => void;
    updateQuantity: (productId: number, newQuantity: number) => void;
    removeCartItem: (productId: number) => void;
    getTotalPrice: () => number;
}
const GlobalContext = createContext<GlobalContextTypes | null>(null);

function GlobalProvider({children}: ReactTypes) {
    const [contentType, setContentType] = useState<SideMenuTitleMapper>(SideMenuTitleMapper.None);

    // Open/Close side menu
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const showProductDetail = (product: Product, title: SideMenuTitleMapper) => {
        setContentType(title);
        setIsSideMenuOpen(true);
        setSelectedItem(product);
    }
    const closeSideMenu = () => setIsSideMenuOpen(false);

    // Set product detail data
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);

    // Set cart items
    const [cartItems, setCartItems] = useState<Cart[] | []>([]);
    const addCartItem = (cartItem: Cart, title: SideMenuTitleMapper) => {
        const updatedCart = [...cartItems, cartItem];  //Para poder usar el siguiente estado ya que la actualización no afecta la variable 
        console.log('Updated Cart: ', updatedCart);     //cartItems en el controlador de evento que ya se está ejecutando
        setCartItems([...cartItems, cartItem]);
        setContentType(title);
        setIsSideMenuOpen(true);
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

    //Set total price
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <GlobalContext.Provider value={{
            contentType,
            isSideMenuOpen,
            showProductDetail,
            closeSideMenu,
            selectedItem,
            setSelectedItem,
            cartItems,
            addCartItem,
            updateQuantity,
            removeCartItem,
            getTotalPrice,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }