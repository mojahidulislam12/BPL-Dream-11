import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/NabVar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";
const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const playersPromis = loadData();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players
          playersPromis={playersPromis}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
