import { useEffect, useState } from "react";
import Card from "../../components/card";
import SideMenu from "../../components/side-menu";
import { Product } from "../../models/product";
import './styles.css'
import { useParams } from "react-router-dom";
import { apiUrl } from "../../shared/constants";

function Home() {
  //Search products by title
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[] | undefined>([]);
  
  const searchByTitle = (term: string) => {
      setSearch(term);
      const regex = new RegExp(term, 'i'); // 'i' flag for case-insensitive search
      const filteredProducts = products.filter((product) => regex.test(product.title));
      setFilteredProducts(filteredProducts);
      // console.log('Filtered products: ', filteredProducts)
  };

  const { name: categoryName } = useParams();
  // console.log('Category name: ', categoryName);

  useEffect(() => {
    let ignore = false;

    fetch(
      !categoryName
      ? `${apiUrl}/products`
      : `${apiUrl}/products/category/${categoryName}`)
      .then(response => response.json())
      .then(products => {
        // console.log('Products:' , products);
        if(!ignore) {
          setSearch('');
          setProducts(products);
        }
      })        
      .catch(error => setError(error))
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, [categoryName]);

  //Get products
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);    

  if (loading) return <p className="text-center text-gray-600 mt-12">Cargando...</p>;
  if (error) return <p className="text-center text-gray-600 mt-12">Error: {error}</p>;
  if (products.length === 0) return <p className="text-center text-gray-600 mt-12">No hay productos para mostrar.</p>;

  const renderProducts = () => {
    const productsToRender = search
      ? filteredProducts
      : products;

    if(productsToRender?.length === 0) {
      return <p className="text-center text-gray-600 mt-12">No hay coincidencias.</p>;
    } else {
      return (
        <div className="grid gap-8 article w-full sm:px-8">
          {
            productsToRender?.map((product) => (
              <Card
                key={product.id}
                {...product}/>
            ))
          }
        </div>
      )
    }
  };

  return (
    <>
      <div className="mb-5 sm:px-8 w-full">
        <div className="relative flex items-center justify-center mb-4">      
          <h2 className="text-center font-medium text-2xl">
            Tienda
          </h2>
          <div className="absolute right-0 flex items-center justify-between gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
            <input
              value={search}
              placeholder="Buscar por título..."
              className="p-1 rounded-lg border-2 border-gray-400 outline-black"
              onChange={(event) => searchByTitle(event.target.value)}
            />
          </div>
        </div>
      </div>
      {renderProducts()}
      <SideMenu />
    </>
  )
}

export default Home