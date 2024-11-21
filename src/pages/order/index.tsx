import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";
import CartItem from "../../components/cart-item";
import { SideMenuTitleMapper } from "../../shared/constants";
import { Order as OrderModel } from "../../models/order";

function Order() {
  const globalContext = useContext(GlobalContext);
  const { id } = useParams(); // Obtiene el parámetro dinámico "id"
  const orderId = id === 'last' ? globalContext?.orders.slice(-1)[0].id : id;
  const orderToShow: OrderModel[] = globalContext?.orders.filter(order => order.id === orderId) || [];

  if (!orderToShow) {
    return <p className="text-center text-gray-600 mt-12">No se encontró una orden con ese ID.</p>;
  }


  return (
    <div className="min-w-80 max-w-[420px] w-full">   
      <div className="flex items-center justify-center sticky top-[70px] py-5 bg-white z-[1]">
        <Link
          to='/orders'
          className="absolute left-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
          </svg>
        </Link>
        <h2 className="text-center font-medium text-2xl">
          Mi Orden
        </h2>

      </div>   
      {
        orderToShow[0]?.items.map((item) => (
            <CartItem 
                key={item.id}
                {...item}
            />
        ))
      }
      { 
        globalContext?.contentType === SideMenuTitleMapper.Order &&
        globalContext?.orders.length > 0 &&
        <div className="sticky bottom-0 py-5 mt-4 bg-white">
            <h3 className="text-center text-base font-medium mb-3">{orderToShow[0]?.totalItems} {orderToShow[0]?.totalItems === 1 ? 'producto' : 'productos'}</h3>
            <h3 className="text-lg font-semibold text-right">Precio total: ${orderToShow[0]?.totalPrice}</h3>
        </div>
      }
    </div>
  )
}

export default Order