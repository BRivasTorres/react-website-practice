import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SubmitReques from "./pages/SubmitReques";
import SignIn from "./pages/SignIn";
import Abstract from "./components/Abstract";

function App() {
  return (
		<>
      <BrowserRouter>
      <Abstract />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/sign"} element={<SubmitReques />} />
          <Route path={"/submit"} element={<SignIn />} />
        </Routes>
      </BrowserRouter>
		</>
  );
}

export default App
