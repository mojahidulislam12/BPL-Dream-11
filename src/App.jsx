import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/NabVar/Navbar";
import Players from "./Components/Players/Players";
const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const playersPromis = loadData();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players playersPromis={playersPromis}></Players>
      </Suspense>
    </>
  );
}

export default App;
