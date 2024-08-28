import product from "../../data/products";
import Products from "../components/Products";

const ShopProduct = () => {
  return (
    <div className="mx-[3%] pb-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
      {product.map((item) => {
        return (
            <Products
             key={item.id} 
              id ={item.id}
              source={item.image}
              title={item.title}
              price={item.price}
              slug={item.slug}
            />
        );
      })}
    </div>
  );
};

export default ShopProduct;
