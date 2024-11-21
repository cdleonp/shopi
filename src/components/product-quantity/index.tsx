import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/global";
import { ProductQuantityTypes, SideMenuTitleMapper } from "../../shared/constants";

function ProductQuantity({id, price, quantity}: ProductQuantityTypes) {
    const globalContext = useContext(GlobalContext);

    // Set initial quantity and handle quantity changes
    const minQuantity = 1;
    const [itemQuantity, setItemQuantity] = useState<number | ''>(quantity);
    const onChangeQuantityHandler = (newQuantity: string) => {
        const newItemQuantity = newQuantity === '' ? '' : Math.max(parseInt(newQuantity), minQuantity);
        setItemQuantity(newItemQuantity);
    }
    const onBlurQuantityHandler = (productId: number, newQuantity: string) => {
        const newItemQuantity = newQuantity === '' ? minQuantity : parseInt(newQuantity);
        setItemQuantity(newItemQuantity);
        globalContext?.updateQuantity(productId, newItemQuantity);
    }
    const increaseQuantity = (productId: number) => {
        const newItemQuantity = itemQuantity === '' ? minQuantity : itemQuantity + 1;
        setItemQuantity(newItemQuantity);
        globalContext?.updateQuantity(productId, newItemQuantity);
    }
    const decreaseQuantity = (productId: number) => {
        const newItemQuantity = Math.max(itemQuantity === '' ? minQuantity : itemQuantity - 1, minQuantity);
        setItemQuantity(newItemQuantity);
        globalContext?.updateQuantity(productId, newItemQuantity);
    }

    // Calculate subtotal for each item
    const itemSubtotal = itemQuantity === '' ? price : price * itemQuantity;

    return (
        <div className="flex items-center justify-between mt-3">  
            {                  
                globalContext?.contentType === SideMenuTitleMapper.CartItem &&
                <div className="flex items-center justify-end space-x-1">
                    <button
                        className="px-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 h-4 leading-4 disabled:bg-gray-500"
                        onClick={() => decreaseQuantity(id)}
                        disabled={itemQuantity === minQuantity}
                    >
                        <span className="sr-only">Reducir cantidad</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                        </svg>

                    </button>
                    <label htmlFor={`item-${id}-Quantity`} className="sr-only">Cantidad</label>
                    <input
                        id={`item-${id}-Quantity`}
                        type="text"
                        className="w-10 text-center text-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                        value={itemQuantity}
                        onChange={(event) => onChangeQuantityHandler(event.target.value)}
                        onBlur={(event) => onBlurQuantityHandler(id, event.target.value)}
                    />
                    <button
                        className="px-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 h-4 leading-4"
                        onClick={() => increaseQuantity(id)}
                    >
                        <span className="sr-only">Incrementar cantidad</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>

                    </button>
                </div>
            }
            {
                globalContext?.contentType === SideMenuTitleMapper.Order &&
                <p className="text-sm font-normal text-gray-900 dark:text-white">Cantidad: {itemQuantity}</p>

            }
            <p className="text-sm font-normal text-gray-900 dark:text-white">Subtotal: ${itemSubtotal}</p>
        </div>
    )
}

export default ProductQuantity