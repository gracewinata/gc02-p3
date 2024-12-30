import { ObjectId } from "mongodb";

export type ProductType = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string;
  createdAt: Date;
  updatedAt: Date;
};

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });

  const responseJson = await response.json();

  return responseJson;
};

export default async function Card() {
  const products: ProductType[] = await fetchProducts();
  console.log(products);
  return (
    <>
      {products.map((el, idx) => (
        <div className="" key={idx + 1}>
          <div className="flex justify-center align-center">
            <div className=" card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{el.name}</h2>
                <p>{el.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
