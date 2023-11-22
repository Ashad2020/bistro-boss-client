import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
export default function Category() {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"from 11am to 10pm"}
          heading={"Order Online"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={img1}></img>
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2}></img>
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3}></img>
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4}></img>
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5}></img>
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
