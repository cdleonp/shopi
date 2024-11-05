import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import { Product } from "../../models/product";

function Card(data: Product) {
	const globalContext = useContext(GlobalContext);

	return (
		<article className="relative w-full h-72">
			<button
					className="absolute flex justify-center items-center top-0 right-0 rounded-full w-7 h-7 bg-white m-3 z-[1]"
					onClick={globalContext?.incrementCounter}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
						<path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
					</svg>
				</button>
			<div
				className="group block h-full cursor-pointer"
				onClick={() => globalContext?.openProductDetail(data)}
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