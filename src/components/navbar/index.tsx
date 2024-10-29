import { NavLink } from "react-router-dom"

function Navbar() {
    const activeRouteStyle = 'underline underline-offset-3';

    return (
      <nav className="flex justify-between items-center mb-6 px-8 py-5 text-sm w-full">
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
            <li>
                🛒 0
            </li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar