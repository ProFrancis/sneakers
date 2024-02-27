import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Home from "./pages/pageHome";
import Homme from "./pages/pageHomme";
import Femme from "./pages/pageFemme";
import Detail from "./pages/pageDetail";
import Layout from "./components/layout";
import NoMatch from "./pages/nothing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/homme" element={<Homme />} />
        <Route path="/femme" element={<Femme />} />
        <Route path="/detail/:name/:id" element={<Detail />} />
        <Route path="*" element={<NoMatch/>} />
      </Route>
    </Routes>
  );
}

export default App;
