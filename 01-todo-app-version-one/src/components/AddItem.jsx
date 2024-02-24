function AddItem({ name, date, onDelClick }) {
  const handleDeleClick = () => {
    onDelClick(name);
  };
  return (
    <div className="container text-center">
      <div className="row yuvi-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success yuvi-btn"
            style={{ height: "90%" }}
            onClick={handleDeleClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
