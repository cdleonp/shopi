import { useRoutes, BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '../contexts/global';
import Account from '../pages/account';
import Home from '../pages/home';
import NotFound from '../pages/not-found';
import Order from '../pages/order';
import Orders from '../pages/orders';
import SignIn from '../pages/sign-in';
import Layout from '../components/layout';
import './App.css';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/orders/:id', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/account', element: <Account /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
