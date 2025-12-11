import React, { useState, lazy, Suspense } from "react";

function App() {
  const [showAbout, setshowAbout] = useState(false);
  const About = lazy(() => import("./components/About"));
  return (
    <>
      <div>
        <button onClick={() => setshowAbout(!showAbout)}>
          {showAbout === false ? "show about" : "hide about"}
        </button>
        <Suspense fallback={<h3>"about component is loading"</h3>}>
          {showAbout && <About />}
        </Suspense>
      </div>
    </>
  );
}

export default App;
