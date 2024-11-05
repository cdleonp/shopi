import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import './styles.css'

function ProductDetail() {
    const globalContext = useContext(GlobalContext);

    return (
        <aside className={`${globalContext?.isDetailOpen ? 'showDetail' : 'hideDetail'} fixed z-[11] top-[68px] right-[-360px] flex flex-col w-[360px] h-[calc(100vh-68px)] px-5 pb-5 bg-white rounded border-2 border-black overflow-y-scroll`}>
            <div className="flex justify-between items-center sticky top-0 py-5 z-[11] bg-white">
                <h2 className="text-lg font-semibold">Detalles</h2>
                <button onClick={() => globalContext?.closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="w-full h-72">
                <figure className="relative h-5/6 overflow-hidden rounded-lg bg-gray-200">
                    <img className="w-full h-full object-cover" src={ globalContext?.selectedItem?.images[0]} alt={globalContext?.selectedItem?.title}/>
                    <h3 className="absolute left-1 bottom-1 inline-block -mt-32 z-10 text-sm font-bold bg-gray-100 py-1 px-3 rounded-lg">{ globalContext?.selectedItem?.category.name }</h3>
                </figure>				
                <footer className="flex flex-col justify-between mt-1">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-md font-medium text-gray-700">{ globalContext?.selectedItem?.title }</h3>
                        <p className="text-lg font-medium text-gray-900 text-right">${ globalContext?.selectedItem?.price }</p>
                    </div>
                    <p className="text-sm font-normal text-gray-900">{ globalContext?.selectedItem?.description }</p>
                </footer>
            </div>
        </aside>
    )
}

export default ProductDetail