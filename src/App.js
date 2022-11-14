import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./components/userlist/Userlist";
import Counter from "./components/counter/Counter";
import SumOfTwoNo from "./components/suboftwonumber/SumOfTwoNo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showuserlist" element={<Userlist />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/sum" element={<SumOfTwoNo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
