import { useState } from "react";
import SectionNav from "./components/SectionNav/SectionNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SectionNav />
    </div>
  );
}

export default App;
