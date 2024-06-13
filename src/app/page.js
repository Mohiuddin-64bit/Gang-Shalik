import Banner from "@/components/Others/Banner";
import FoodCategory from "@/components/Others/FoodCategory";
import GalleryComponent from "@/components/Others/MenuSlide";
import MenuSlide from "@/components/Others/MenuSlide";
import OurMenu from "@/components/Others/OurMenu";
import OurStory from "@/components/Others/OurStory";
import Testimonial from "@/components/Others/Testimonial";


export default function Home() {
  return (
    <main>
      <div className="">
        <Banner />
      </div>
      <OurStory />
      <OurMenu />
      <Testimonial />
      <FoodCategory />
      <GalleryComponent />
    </main>
  );
}
