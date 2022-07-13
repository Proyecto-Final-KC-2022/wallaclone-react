import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/product/ProductCard";

const style = {};

const CategoryPage = () => {
  return (
    <>
      <div>
        <div className="flex-col xl:px-[200px] px-[15px] py-[15px] min-h-[100vh] bg-gray-200">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
