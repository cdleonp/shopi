import { Product } from "../../models/product";

function ProductDetail(product: Product) {

    return (        
        <article>
            <section className="w-full h-72">
                <figure className="relative h-full overflow-hidden rounded-lg bg-gray-200">
                    <img className="w-full h-full object-cover" src={ product.image } alt={ product.title }/>
                    <h3 className="absolute left-1 bottom-1 inline-block -mt-32 z-10 text-sm font-bold bg-gray-100 py-1 px-3 rounded-lg">{ product.category }</h3>
                </figure>				
            </section>
            <footer className="flex flex-col mt-1">
                <div className="flex justify-between mb-4">
                    <h3 className="text-md font-medium text-gray-700">{ product.title }</h3>
                    <p className="text-lg font-medium text-gray-900 text-right">${ product.price }</p>
                </div>
                <p className="text-sm font-normal text-gray-900">{ product.description }</p>
            </footer>
        </article>
    )
}

export default ProductDetail