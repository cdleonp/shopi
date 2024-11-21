import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";
import { SideMenuTitleMapper } from "../../shared/constants";

/**
 * This component renders the navigation bar with the provided links.
 * No parameters are needed for this component.
 * @returns The HTML for the navigation bar.
 */

function Navbar() {
    const globalContext = useContext(GlobalContext);
    const activeRouteStyle = 'underline underline-offset-3';
    const showCart = (title: SideMenuTitleMapper) => {
        globalContext?.setContentType(title);
        globalContext?.setIsSideMenuOpen(true);
    }
    const totalCartItems = () => globalContext?.cartItems.reduce((total, item) => total + item.quantity, 0);


    return (
      <nav className="sticky top-0 bg-white z-[11] border-[1px] flex justify-between items-center mb-6 px-8 py-5 text-sm w-full">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Todas
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/ropa'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Ropa
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/electronica'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Electrónica
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/hogar'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Hogar
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/otras'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Otras
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60">
                cdavidl@hotmail.com
            </li>
            <li>
                <NavLink
                    to='/orders'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Órdenes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/account'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Cuenta
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/sign-in'
                    className={({isActive}) =>
                        isActive ? activeRouteStyle : undefined
                    }
                >
                    Iniciar sesión
                </NavLink>
            </li>
            <li
                className="flex justify-around items-center cursor-pointer"
                onClick={() => showCart(SideMenuTitleMapper.CartItem)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 me-1">
                    <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                {totalCartItems()}
            </li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar