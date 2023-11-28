import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Dashboard from "./Components/Elements/Dashboard";
import Pos from "./Components/Elements/Pos";
import Socialmedia from "./Components/Elements/Socialmedia";
import Feedback from "./Components/Elements/Feedback";
import Analysis from "./Components/Elements/Analysis";
import Dinemenu from "./Components/Elements/Dinemenu";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dinemenu" element={<Dinemenu/>} />
          <Route path="/pos" element={<Pos/>} />
          <Route path="/socialmedia" element={<Socialmedia/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/analysis" element={<Analysis/>} />
        </Routes>

        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
