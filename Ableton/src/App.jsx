import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ableton from "./components/Ableton";
import Live from "./pages/Live";
import Push from "./pages/Push";
import Note from "./pages/Note";
import Link from "./pages/Link";
import Help from "./pages/Help";
import More from "./pages/More";
import Login from "./pages/Login";
import TryLive from "./pages/TryLive";
import En from "./pages/about/En";
import AboutEn from "./pages/about/AboutEn";
import JobsEn from "./pages/about/JobsEn";
import ApprenticeshipsEn from "./pages/about/ApprenticeshipsEn";

function App() {
	return (
		<div className="bg-[#F3F3F3]">
			<BrowserRouter>
				<Ableton />
				<Routes>
					<Route exact path="/en" element={<En />}>
						<Route path="about" element={<AboutEn />} />
						<Route path="jobs" element={<JobsEn />} />
						<Route
							path="apprenticeships"
							element={<ApprenticeshipsEn />}
						/>
					</Route>
					<Route exact path="/live" element={<Live />} />
					<Route exact path="/push" element={<Push />} />
					<Route exact path="/note" element={<Note />} />
					<Route exact path="/link" element={<Link />} />
					<Route exact path="/help" element={<Help />} />
					<Route exact path="/more" element={<More />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/TryLive" element={<TryLive />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
