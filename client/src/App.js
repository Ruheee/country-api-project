import Countries from "./components/Countries";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { Country } from "./components/Country";
function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const setSearchValue = (e) => {
    return setSearch(e);
  };

  const setFilterValue = (e) => {
    return setRegion(e);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Countries
                setSearchValue={setSearchValue}
                setFilterValue={setFilterValue}
                region={region}
                search={search}
              />
            }
          />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
