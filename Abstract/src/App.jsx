import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SubmitReques from "./pages/SubmitReques";
import SignIn from "./pages/SignIn";
import ContentPages from "./pages/ContentPages";

function App() {
  return (
		<>
			<BrowserRouter>
				{/* <Abstract /> */}
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/content/:name"} element={<ContentPages />} />
					<Route path={"/sign"} element={<SubmitReques />} />
					<Route path={"/submit"} element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</>
  );
}

export default App
