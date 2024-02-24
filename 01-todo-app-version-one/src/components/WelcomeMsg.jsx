const WelcomeMsg = ({ items }) => {
  let msg = "";
  if (items.length === 0) {
    msg = "Enter your Tasks";
  }
  return (
    <>
      <h4>{msg}</h4>
      <br />
    </>
  );
};
export default WelcomeMsg;
