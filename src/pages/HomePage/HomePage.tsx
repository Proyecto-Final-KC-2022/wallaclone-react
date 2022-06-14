import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"

const style = {
  homepageWrapper: "flex w-full h-screen bg-gray-500",
}

const HomePage = () => {
  return (
    <>
      <Header />
        <div className={style.homepageWrapper}>HomePage</div> 
      <Footer />
    </>  
  )
}

export default HomePage