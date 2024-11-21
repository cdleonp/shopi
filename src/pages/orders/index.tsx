import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";import OrderCard from "../../components/order-card"

function Orders() {
  const globalContext = useContext(GlobalContext);

    return (
      <div className="min-w-80 max-w-[500px] w-full">   
        <div className="flex items-center justify-center sticky top-[70px] py-5 bg-white z-[1]">      
          <h2 className="text-center font-medium text-2xl">
            Mis Órdenes
          </h2>
        </div>
        {
          globalContext?.orders.map((order) => (
            <OrderCard 
              key={order.id}
              {...order}
            />
          ))
        }
        {
          globalContext?.orders.length === 0 ?
          <p className="text-center text-gray-600 mt-12">No se ha creado ninguna órden.</p> :
          <div className="sticky bottom-0 py-5 mt-4 bg-white">
              <h3 className="text-center text-base font-medium">{globalContext?.orders.length} {globalContext?.orders.length === 1 ? 'orden' : 'órdenes'} en total</h3>
          </div>
        }
      </div>
    )
  }
  
  export default Orders