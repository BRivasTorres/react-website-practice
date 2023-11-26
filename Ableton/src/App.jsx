import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ableton from "./components/Ableton";
import Live from "../src/pages/Live";
import Push from "../src/pages/Push";
import Note from "../src/pages/Note";
import Link from "../src/pages/Link";
import Help from "../src/pages/Help";
import More from "../src/pages/More";
import Login from "../src/pages/Login";
import TryLive from "../src/pages/TryLive";

function App() {
	return (
		<div className="bg-[#F3F3F3] ">
			<BrowserRouter>
				<Ableton />
				<Routes>
					<Route axact path="/live" element={<Live />} />
					<Route axact path="/push" element={<Push />} />
					<Route axact path="/note" element={<Note />} />
					<Route axact path="/link" element={<Link />} />
					<Route axact path="/help" element={<Help />} />
					<Route axact path="/more" element={<More />} />
					<Route axact path="/login" element={<Login />} />
					<Route axact path="/TryLive" element={<TryLive />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
