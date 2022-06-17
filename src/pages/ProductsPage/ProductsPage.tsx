import Header from "../../components/header/Header"
import ProductCard2 from "../../components/product/ProductCard2"

const style = {}

const ProductsPage = () => {
  return (
    <>
      <Header />
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 px-[15px] py-[15px] min-h-[100vh] bg-gray-200">
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </div>
    </>
  )
}

export default ProductsPage