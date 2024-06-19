import React, {
  useState,
  Suspense,
  useEffect,
  useContext,
  useRef,
} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { MyContext } from "./Context";
const MainPage = React.lazy(() => import("./MainPage"));
const PortfolioPage = React.lazy(() => import("./PortfolioPage"));
const ShowProjectPage = React.lazy(() => import("./ShowProjectPage"));

function App() {
  const [activeNavId, setActiveNavId] = useState("navMain");
  const { currentProject, setCurrentProject, setPage } = useContext(MyContext);
  useEffect(() => {
    activeNavId === "navMain" && setCurrentProject(1);
    setPage(1);
  }, [activeNavId]);

  const handleNavClick = (navId) => {
    if (activeNavId !== navId) {
      setActiveNavId(navId);
    }
  };

  // scrolls
  const myFirstRef = useRef(null);
  const mySecondRef = useRef(null);
  const executeScrollToFirst = () => {
    myFirstRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const executeScrollToSecond = () =>
    mySecondRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                activeNavId={activeNavId}
                handleNavClick={handleNavClick}
                firstRef={myFirstRef}
                secondRef={mySecondRef}
                executeScrollToFirst={executeScrollToFirst}
                executeScrollToSecond={executeScrollToSecond}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                activeNavId={activeNavId}
                handleNavClick={handleNavClick}
              />
            }
          />
          <Route
            path="/project/:id"
            element={
              <ShowProjectPage
                activeNavId={activeNavId}
                handleNavClick={handleNavClick}
                executeScrollToFirst={executeScrollToFirst}
                executeScrollToSecond={executeScrollToSecond}
              />
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
