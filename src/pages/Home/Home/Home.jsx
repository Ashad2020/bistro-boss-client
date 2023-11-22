import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularManu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopularManu></PopularManu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
}
