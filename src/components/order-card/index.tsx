import { Link } from "react-router-dom";
import { Order } from "../../models/order";

function OrderCard({id, totalItems, totalPrice, date}: Order) {

    return (
        <article className="w-full mb-2">
            <div className="relative flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <header className="flex flex-wrap items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Orden</h3>
                    <h3 className="text-lg font-medium text-white">{id}</h3>
                </header>
                <section className="mb-3">
                    <hr className="my-2"/>
                    <p className="text-base dark:text-white"><span className="font-medium">Productos:</span> { totalItems }</p>                
                    <p className="text-base dark:text-white"><span className="font-medium">Precio:</span> ${ totalPrice }</p>
                    <p className="text-base dark:text-white"><span className="font-medium">Fecha:</span> {date}</p>
                </section>
                <footer className="flex self-end">
                    <Link
                        to={`/orders/${id}`}
                        className="flex items-center font-medium text-blue-600 hover:underline"
                    >
                        <span className="me-2.5">Ver orden</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </footer>
            </div>
        </article>
    )
}
  
export default OrderCard