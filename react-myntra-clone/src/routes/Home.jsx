import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import Banner from "../components/Banner";
import OfferContainer from "../components/OfferContainer";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <Banner />
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item}></HomeItem>
        ))}
      </div>
      <OfferContainer />
    </main>
  );
};

export default Home;
