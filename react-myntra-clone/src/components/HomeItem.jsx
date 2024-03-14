import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { MdOutlineDeleteForever } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddBag = () => {
    dispatch(bagAction.addItemsToBag(item.id));
  };
  const bag = useSelector((store) => store.bag);
  let itemPresence = bag.indexOf(item.id) >= 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count} Ratings..
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!itemPresence && (
        <button className="btn-add-bag" onClick={handleAddBag}>
          Add to Bag
        </button>
      )}
      {itemPresence && (
        <button
          type="button"
          className="btn btn-warning btn-add-bag"
          onClick={() => {
            dispatch(bagAction.removeItemsOfBag(item.id));
          }}
        >
          <MdOutlineDeleteForever />
          <span>remove</span>
        </button>
      )}
    </div>
  );
};

export default HomeItem;
