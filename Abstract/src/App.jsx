import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ContentPages from "./pages/ContentPages";

function App() {
  return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/content/:name"} element={<ContentPages />} />
					<Route path={"/signIn"} element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</>
  );
}

export default App
