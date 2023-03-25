import React, { FC } from "react";
import AllRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
