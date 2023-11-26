import { BrowserRouter, Routes } from "react-router-dom";
import Ableton from "./components/Ableton";
import NavRoutes from "./routes/NavRoutes";

function App() {
	return (
		<div className="bg-[#F3F3F3] ">
			<BrowserRouter>
				<Ableton />
				<Routes>
					<NavRoutes />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
