import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Main() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Products />
        <Footer />
      </div>
    </>
  );
}
