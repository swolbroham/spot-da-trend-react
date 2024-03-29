import { BrowserRouter, Route } from "react-router-dom";
import SpotRequest from "./components/Auth";
import FilterableSongTable from "./components/Table";
import SideBar from "./components/Navbar";
import "./index.css";

const tableSample = [
  {
    key: 0,
    artist: "Ryan Gosling",
    album: "Barbie",
    songName: "I'm just Ken",
    trackTime: 321421,
  },
  {
    key: 1,
    artist: "Billie Eillish",
    album: "Barbie",
    songName: "What was I made for",
    trackTime: 312415,
  },
  {
    key: 2,
    artist: "New Jeans",
    album: "New Jeans 'OMG'",
    songName: "OMG",
    trackTime: 321588,
  },
];


function App() {
  return (
    <main className="relative grid grid-cols-1 gap-4 p-4 md:h-lvh md:grid-cols-12">
      {/* <SideBar />
      <FilterableSongTable songs={tableSample} /> */}
      <SpotRequest />
    </main>
  );
}

export default App;
