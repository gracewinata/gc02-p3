import Card from "@/components/Card";
import { ProductType } from "@/types";
import { useEffect, useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [page, setPage] = useState();

//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await fetch("http://localhost:3000/api/products");

//       const productsRes: ProductType[] = await res.json();

//       setProducts(productsRes);
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {products.map((product, idx) => {
//         return <Card product={product} key={idx} />;
//       })}
//     </>
//   );
// }

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const responseJson: ProductType[] = await response.json();
  console.log(responseJson);
  return responseJson;
};

const Products = async () => {
  const products = await fetchProducts();
  console.log(products);
  return (
    <>
      {products.map((product, idx) => (
        <div className="flex justify-center align-center">
          <div className=" card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={product.images} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to wishlist</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
