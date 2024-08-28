import ShopHero from "../../ui/ShopHero";
import ShopProduct from "../../ui/ShopProduct";

const Shop = () => {
  return (
    <>
      <div className="shop bg-[rgba(239,232,232,0.99)]">
        <ShopHero />
        <div className="set flex items-center justify-center">
          <ShopProduct />
        </div>
      </div>
    </>
  );
};

export default Shop;
