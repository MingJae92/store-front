import { useEffect, useState } from "react";
import axios from "axios";
import { Storefrontdata } from "../types/Types";
import Errorload from "../errorLoad/Errorload";

function Storefront() {
  const [products, setProducts] = useState<Storefrontdata[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Set to true initially
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const productDataFetch = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    productDataFetch();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p> // Show loading first
      ) : error ? (
        <Errorload /> // If not loading, show error
      ) : (
        products.map((product) => <p key={product.id}>{product.title}<img src={product.image}/></p>) // Show data when no error
      )}
    </div>
  );
}

export default Storefront;
