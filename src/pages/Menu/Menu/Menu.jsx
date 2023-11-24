import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/salad-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
export default function Menu() {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {"main cover"}
      <SectionTitle
        subHeading={"Don't miss "}
        heading={"todays offer"}
      ></SectionTitle>
      {"offered menu items"}
      <MenuCategory items={offered}></MenuCategory>
      {"dessert items"}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
}
