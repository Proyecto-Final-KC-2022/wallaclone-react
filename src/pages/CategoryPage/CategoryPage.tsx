import Header from "../../components/header/Header"
import ProductCard from "../../components/product/ProductCard"

const style = {}

const CategoryPage = () => {
  return (
    <>
      <Header />
      <div className="flex-col px-[15px] py-[15px] min-h-[100vh] bg-gray-200">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default CategoryPage