import { Product } from "../../models/product";

function Card(data: Product) {
	return (
		<a href="#" className="group">
			<article className="relative w-72 h-3/4">
					<figure className="relative w-full overflow-hidden rounded-lg bg-gray-200">
						<img src={ data?.images[0]} alt={data?.title}/>
						<h3 className="absolute left-1 bottom-1 inline-block -mt-32 z-10 text-sm font-bold bg-gray-100 py-1 px-3 rounded-lg">{ data?.category.name }</h3>
					</figure>
					<button className="absolute flex justify-center items-center top-0 right-0 rounded-full w-7 h-7 bg-white m-3">
						+
					</button>
					<footer className="flex justify-between mt-1">
						<h3 className="text-sm text-gray-700">{ data?.title }</h3>
						<p className="text-lg font-medium text-gray-900">${ data?.price }</p>
					</footer>
			</article>            
		</a>
	)
}

export default Card