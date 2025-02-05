import { useEffect, useState } from "react";
import axios from "axios";
import { Storefrontdata } from "../types/Types";

function Storefront() {
  const [products, setProducts] = useState<Storefrontdata[]>([]); // Initialize as an empty array
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError]=useState<boolean>()

  useEffect(() => {
    const productDataFetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
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
        <p>Loading...</p>
      ) : (
        products.map((product) => <p key={product.id}>{product.title}</p>)
      )}:{

      }
    </div>
  );
}

export default Storefront;
