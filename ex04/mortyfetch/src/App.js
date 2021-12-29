import React, { useState } from "react";
import { MountComponent } from "./components/MountComponent";
import { FetchApp } from "./FetchApp";

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <div className="App">
      <MountComponent
        mounted={mounted}
        setMounted={() => setMounted((mounted) => !mounted)}
      />
      {mounted ? <FetchApp /> : null}
    </div>
  );
}

export default App;
