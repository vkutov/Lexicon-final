import "../styles/Home.css";
import ProductList from "../components/FoodList";
import Footer from "../components/Footer";

export function Home() {
  return (
    <main className="home-main">
      <ProductList />
      <Footer />
    </main>
  );
}
