import Banner from "@/components/Others/Banner";
import OurMenu from "@/components/Others/OurMenu";
import OurStory from "@/components/Others/OurStory";
import Testimonial from "@/components/Others/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
      <Banner />
      </div>
      <OurStory />
      <OurMenu />
      <Testimonial />
    </main>
  );
}
