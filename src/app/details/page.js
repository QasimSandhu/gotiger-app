
import Footer from "@/components/footer";
import MightLikeProducts from "@/components/might-like-products";
import ProductCard1 from "@/components/product-card1";
import ProductHeader from "@/components/productHeader1";
import ReviewSlider from "@/components/reviews";
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className="App">
      <ProductHeader />
      <ProductCard1 />
      <MightLikeProducts />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
