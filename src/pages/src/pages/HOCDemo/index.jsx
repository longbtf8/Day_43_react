import { useState } from "react";
import UserProfile from "./components/UserProfile";
import ProductList from "./components/ProductList";

const HOCDemo = () => {
  const [userLoading, setUserLoading] = useState(true);
  const [productLoading, setProductLoading] = useState(true);

  return (
    <div className="p-3">
      <div className="h-50">
        <button
          className=" border-2 mr-2 w-50  h-10 rounded-xl  bg-blue-400 text-white cursor-pointer"
          onClick={() => {
            setUserLoading(!userLoading);
          }}
        >
          Toggle User Loading
        </button>

        <UserProfile isLoading={userLoading} />
      </div>
      <div>
        <button
          className=" border-2 mr-2 w-50  rounded-xl h-10 bg-blue-400 text-white cursor-pointer"
          onClick={() => {
            setProductLoading(!productLoading);
          }}
        >
          Toggle Product Loading
        </button>
        <ProductList isLoading={productLoading} />
      </div>
    </div>
  );
};
export default HOCDemo;
