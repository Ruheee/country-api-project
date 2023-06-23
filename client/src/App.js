import Countries from "./components/Countries";
import { useState } from "react";
// import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const setSearchValue = (e) => {
    return setSearch(e);
  };

  const setFilterValue = (e) => {
    return setRegion(e)
  }

  return (
    <div>
      <Countries 
      setSearchValue={setSearchValue} 
      setFilterValue={setFilterValue}
      region={region}
      search = {search}
      />
    </div>
  );
}

export default App;
