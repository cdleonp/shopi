import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import { Product } from "../../models/product";
import { SideMenuTitleMapper } from "../../shared/constants";

function Card(data: Product) {
	const globalContext = useContext(GlobalContext);
	const showProductDetail = (data: Product, title: SideMenuTitleMapper) => {
		globalContext?.setProductDetail(data, title);
		globalContext?.setIsSideMenuOpen(true);
	}
	const isAlreadyInCart = globalContext?.cartItems.find((item) => item.id === data.id);
	const AddItemAndShowCart = (product: Product, contentType: SideMenuTitleMapper) => {
		if(!isAlreadyInCart) {
			globalContext?.addCartItem({ ...product, quantity: 1 }, contentType);
		}
		globalContext?.setIsSideMenuOpen(true);
	}

	return (
		<article className="relative w-full h-72">
			<button
					className="absolute flex justify-center items-center top-0 right-0 rounded-full w-7 h-7 bg-white m-3 z-[1]"
					onClick={() => AddItemAndShowCart(data, SideMenuTitleMapper.CartItem)}>
					{
						isAlreadyInCart
						? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-green-700">
							<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
						</svg>
						: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
							<path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
						</svg>
					}
				</button>
			<div
				className="group block h-full cursor-pointer"
				onClick={() => showProductDetail(data, SideMenuTitleMapper.ProductDetail)}
			>
				<figure className="relative h-5/6 overflow-hidden rounded-lg bg-gray-200">
					<img className="w-full h-full object-cover" src={ data?.images[0]} alt={data?.title}/>
					<h3 className="absolute left-1 bottom-1 inline-block -mt-32 z-10 text-sm font-bold bg-gray-100 py-1 px-3 rounded-lg">{ data?.category.name }</h3>
				</figure>				
				<footer className="flex justify-between mt-1">
					<h3 className="text-sm text-gray-700">{ data?.title }</h3>
					<p className="text-lg font-medium text-gray-900">${ data?.price }</p>
				</footer>
			</div>
		</article>            
	)
}

export default Card