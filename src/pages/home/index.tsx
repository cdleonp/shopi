import { useState, useEffect } from "react";
import Card from "../../components/card";
import SideMenu from "../../components/side-menu";
import { Product } from "../../models/product";
import './styles.css'

const apiUrl = 'https://api.escuelajs.co/api/v1/products';
const defaultImg = 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-acampada-de-otono.png';

function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {     
      fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
          const finalData = products.map((product: Product) => {
            if(product.images.length > 0) {
              const imgUrlSanitized = product.images.map((url) => {
                return url.replace(/[[\]"]/g, '');
              });
              // console.log(imgUrlSanitized);
              return {
                  ...product,
                  images: imgUrlSanitized
              }
            } else {
              return {
                ...product,
                images: [defaultImg]
              }
            }
          });
          setProducts(finalData)
        })        
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (products.length === 0) return <p>No hay productos para mostrar.</p>;

    return (
      <>
        <div className="grid gap-8 article w-full sm:px-8">
          {
            products?.map((product) => (
              <Card
                key={product.id}
                {...product}/>
              ))
            }
        </div>
        <SideMenu />
      </>
    )
  }
  
  export default Home