import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
export default function Featured() {
  return (
    <div className="freatured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg}></img>
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content here, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for lorem ipsum will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident,
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
