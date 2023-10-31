import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {ProviderContext} from "./context/NaturalContext";

import Favorites from "./views/Favorites";
import Home from "./views/Home";



const App = () => {
  return (

    
    <div>
      <ProviderContext>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </ProviderContext>
    </div>
   
  );
};
export default App;
