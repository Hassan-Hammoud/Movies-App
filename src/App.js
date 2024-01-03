import "./App.css";
import Add from "./components/Add/Add";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";
import ContextProvider from "./components/context/GlobalContext";

function App() {
  return (
    <>
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/Watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
