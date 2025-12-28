import { useQuery } from "@tanstack/react-query";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import PricingComponent from "../components/PricingComponent";
import StatisticsComponent from "../components/StatisticsComponent";
import FooterComponent from "../components/FooterComponent";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
};

type ApiResponse = {
  products: Product[];
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch");

  const data: ApiResponse = await res.json();
  return data.products;
};


const HomePage = () => {
 
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading products</h2>;

  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <PricingComponent />

      <StatisticsComponent>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          We help businesses grow by creating clean, fast, and user-friendly websites and applications.
        </h2>
        <p className="text-gray-600 text-center lg:w-2/3 mx-auto text-base leading-relaxed">
          Our focus is on quality design, reliable development, and solutions that actually work.
        </p>
      </StatisticsComponent>

      <div style={{ padding: "2rem" }} className="flex flex-col items-center gap-4" >
        <h1 className="text-3xl font-bold">Products List</h1>

<div className="flex justify-center flex-wrap gap-2">

        {data?.map((product) => (
          <div
            key={product.id}
            className="h-60 w-96 "
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",

            }}
            >
            

            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} ⭐</p>
           
          </div>
        ))}
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
