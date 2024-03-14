import { useSelector } from "react-redux";
import BagItemsContainer from "../components/BagItemsContainer";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  const finalItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });
  let totalMRP = 0;
  finalItems.map((item) => {
    totalMRP += item.current_price;
  });

  const finalBag = {
    totalItem: finalItems.length,
    totalMRP,
    totalDiscount: parseInt(totalMRP * 0.1),
  };
  return (
    <main>
      <div className="bag-page">
        {finalItems.map((item) => (
          <BagItemsContainer key={item.id} item={item}></BagItemsContainer>
        ))}
        <BagSummary bag={finalBag} />
      </div>
    </main>
  );
};

export default Bag;
