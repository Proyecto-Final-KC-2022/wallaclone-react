import ProductPageHeader from "../header/ProductPageHeader";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function ProductPageLayout({ children }) {
  return (
    <>
      <ProductPageHeader/>
      <main>{children}</main>
      <Footer />
      <Navbar />
    </>
  );
}

export default ProductPageLayout;
