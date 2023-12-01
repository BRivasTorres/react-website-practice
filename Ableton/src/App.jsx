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
import En from "./pages/En";
import AboutEn from "./pages/AboutEn";
import JobsEn from "./pages/JobsEn";
import ApprenticeshipsEn from "./pages/ApprenticeshipsEn";

function App() {
	return (
		<div className="bg-[#F3F3F3] ">
			<BrowserRouter>
				<Ableton />
				<Routes>
					<Route path="/en/*" element={<En />}>
						<Route path="about" element={<AboutEn />} />
						<Route path="jobs" element={<JobsEn />} />
						<Route
							path="apprenticeships"
							element={<ApprenticeshipsEn />}
						/>
					</Route>
					<Route path="/live" element={<Live />} />
					<Route path="/push" element={<Push />} />
					<Route path="/note" element={<Note />} />
					<Route path="/link" element={<Link />} />
					<Route path="/help" element={<Help />} />
					<Route path="/more" element={<More />} />
					<Route path="/login" element={<Login />} />
					<Route path="/TryLive" element={<TryLive />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
