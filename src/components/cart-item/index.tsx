import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import { Cart } from "../../models/cart";
import { SideMenuTitleMapper } from "../../shared/constants";
import ProductQuantity from "../product-quantity";

function CartItem({id, title, price, image, quantity}: Cart) {
    const globalContext = useContext(GlobalContext);

    return (        
        <article className="w-full mb-2">
            <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                {
                    globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                    <button
                        type="button"
                        className="absolute top-2 right-2 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => globalContext?.removeCartItem(id)}
                    >
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                }
                <div className="flex items-center justify-between">
                    <img className="h-20 w-20" src={ image } alt={ title } />     
                    <div className="flex flex-1 items-stretch justify-between">
                        <p className="flex-1 px-2 text-base font-medium text-gray-900 dark:text-white">{ title }</p>                
                        <p className="text-end text-base font-bold text-gray-900 dark:text-white">${ price }</p>
                    </div>
                </div>
                <ProductQuantity
                    id={id}
                    price={price}
                    quantity={quantity}
                />    
            </div>
        </article>
    )
}

export default CartItem