import Countries from "./components/Countries";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Filter from "./components/Filter";
import { Country } from "./components/Country";


function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light")
  const setWebTheme = () => {
    if(theme === "light") {setTheme("dark")};

    if(theme === "dark") {setTheme("light")};


  }
  const setSearchValue = (e) => {
    setSearch(e);
  };
  const setFilterValue = (e) => {
    return setRegion(e);
  };

  return (
    <div className={theme}>
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
                theme={theme}
                setWebTheme={setWebTheme}
              />
            }
          />
          <Route path="/:name" element={<Country search={search} setSearch={setSearch} setWebTheme={setWebTheme} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
