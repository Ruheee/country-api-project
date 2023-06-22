import Countries from "./components/Countries";
import { useState } from "react";
// import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
function App() {
  const [search, setSearch] = useState("");

  const setSearchValue = (e) => {
    return setSearch(e);
  };

  return (
    <div>
      <Countries 
      setSearchValue={setSearchValue} 
      search = {search}
      />
    </div>
  );
}

export default App;
