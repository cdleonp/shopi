import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import ProductDetail from "../product-detail";
import CartItem from "../cart-item";
import { SideMenuTitleMapper } from "../../shared/constants";
import './styles.css'

function SideMenu() {
    const globalContext = useContext(GlobalContext);

    return (
        <aside className={`${globalContext?.isSideMenuOpen ? 'show-side-menu' : 'hide-side-menu'} fixed z-[11] top-[68px] right-[-360px] flex flex-col w-[360px] h-[calc(100vh-68px)] px-5 pb-5 bg-white rounded border-2 border-black overflow-y-scroll`}>
            <div className="flex justify-between items-center sticky top-0 py-5 z-[11] bg-white">
                <h2 className="text-lg font-semibold">
                    {globalContext?.contentType}
                </h2>
                <button onClick={() => globalContext?.closeSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {globalContext?.contentType === SideMenuTitleMapper.ProductDetail &&
            globalContext?.selectedItem &&  // Validar si hay un producto seleccionado
                <ProductDetail
                    {...globalContext?.selectedItem}
                />
            }
            {globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                globalContext?.cartItems.map((item) => (
                    <CartItem 
                        key={item.id}
                        {...item}
                    />
                ))
            }                
            {globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                <h3 className="text-lg font-semibold ms-auto mt-2">Total: ${globalContext?.getTotalPrice()}</h3>
            }                
        </aside>
    )
}

export default SideMenu