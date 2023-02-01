import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import './App.css';

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div className="App_body">
      <div className="App_search">
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
      </div>
      <div className="App_map">
        <Maps selectPosition={selectPosition} />
      </div>
    </div>
  );
}

export default App;
