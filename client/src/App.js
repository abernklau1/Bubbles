import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout.js";

import { Error, Home, Login } from "./pages/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" elemtn={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
