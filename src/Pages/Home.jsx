import toast from "react-hot-toast";
import HeadingSlider from "../Components_temp/home/HeadingSlider";
import ProductsCard from "../Components_temp/home/ProductsCard";
import Slider from "../Components_temp/home/Slider";
import Loading from "../Components_temp/loading/Loading";
import { useHomeContext } from "../context/HomeContext";

function Home() {
  const { categories, isLoading } = useHomeContext();

  return (
    <section className="bg-section pb-6">
      <HeadingSlider products={categories} />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-[-60px] sm:mt-[-90px] md:mt-[-150px] z-50 lg:mt-[-190px] xl:mt-[-340px] relative space-y-4 px-10">
          <ProductsCard />

          <Slider />

          <ProductsCard />

          <Slider title="Min. 50% off | Unique kitchen finds | Amazon Brands & more" />
        </div>
      )}
    </section>
  );
}

export default Home;
