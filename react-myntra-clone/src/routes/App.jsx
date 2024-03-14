import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetching from "../components/Fetching";

function App() {
  return (
    <>
      <Header />
      <Fetching />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
