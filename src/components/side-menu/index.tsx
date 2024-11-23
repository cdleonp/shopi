import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";
import ProductDetail from "../product-detail";
import CartItem from "../cart-item";
import { SideMenuTitleMapper } from "../../shared/constants";
import './styles.css'
import { Order } from "../../models/order";

function SideMenu() {
    const globalContext = useContext(GlobalContext);
    const totalItems = globalContext?.cartItems.reduce((total, item) => total + item.quantity, 0) || 0;
    const getTotalPrice = () => globalContext?.getTotalPrice(globalContext?.cartItems) || 0;
    const checkoutHandler = () => {
        const date = new Date();
        const newOrder: Order = {
            id: crypto.randomUUID(),
            items: globalContext?.cartItems || [],
            totalItems: totalItems,
            totalPrice: getTotalPrice(),
            date: date.toUTCString(),
        };
        globalContext?.setOrders([...globalContext.orders, newOrder]);
        globalContext?.setCartItems([]);
        globalContext?.setContentType(SideMenuTitleMapper.Order);
        globalContext?.setIsSideMenuOpen(false);
    }

    return (
        <aside className={`${globalContext?.isSideMenuOpen ? 'show-side-menu' : 'hide-side-menu'} fixed z-[11] top-[68px] right-[-360px] flex flex-col w-[360px] h-[calc(100vh-68px)] px-5 bg-white rounded border-2 border-black overflow-y-scroll`}>
            <header className="flex justify-between items-center sticky top-0 py-5 z-[11] bg-white">
                <h2 className="text-lg font-semibold">
                    {globalContext?.contentType}
                </h2>
                <button onClick={() => globalContext?.setIsSideMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </button>
            </header>
            {
                globalContext?.contentType === SideMenuTitleMapper.ProductDetail &&
                globalContext?.selectedItem &&  // Validar si hay un producto seleccionado
                <ProductDetail
                    {...globalContext?.selectedItem}
                />
            }
            {
                globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                globalContext?.cartItems.map((item) => (
                    <CartItem 
                        key={item.id}
                        {...item}
                    />
                ))
            }
            {
                globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                globalContext?.cartItems.length > 0 &&
                <footer className="sticky bottom-0 pt-2 pb-5 mt-4 bg-white">
                    <h3 className="text-lg font-semibold text-right">Total: ${getTotalPrice()}</h3>
                    <Link to='/orders/last'>
                        <button
                            className="w-full bg-black text-white rounded-lg font-semibold p-3 mt-3"
                            onClick={() => checkoutHandler()}
                        >
                            Checkout
                        </button>
                    </Link>
                </footer> 
            } 
            {
                globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                globalContext?.cartItems.length === 0 &&
                <p className="text-center text-gray-600 mt-12">No hay productos en el carrito.</p>   // Mostrar mensaje cuando el carrito está vacío
            }
        </aside>
    )
}

export default SideMenu