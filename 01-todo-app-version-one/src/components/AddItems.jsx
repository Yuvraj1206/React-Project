import AddItem from "./AddItem";

function AddItems({ items, onDelClick }) {
  return (
    <div>
      {items.map((item) => (
        <AddItem
          name={item.name}
          key={item.name}
          date={item.date}
          onDelClick={onDelClick}
        ></AddItem>
      ))}
    </div>
  );
}

export default AddItems;
