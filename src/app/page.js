import ProductHeaderSlider from "@/components/ProdutHeaderSlider";
import Bestseller from "@/components/bestSeller";
import BrandGrid from "@/components/brandsGrid";
import Header from "@/components/header";
import Section1 from "@/components/section1";
import WinBig from "@/components/winBig";
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <ProductHeaderSlider />
      <WinBig />
      <Bestseller />
      <Section1 />
      <BrandGrid />
      <Section1 />
    </div>
  );
}
