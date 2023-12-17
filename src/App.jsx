import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import routes from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="relative overflow-hidden">
			<Router>
				<Routes>
					{routes.map((route, index) => {
						const Page = route.component;

						return (
							<Route
								path={route.path}
								key={index}
								element={
									<Page>
										<Navbar isLight={route.isLight}></Navbar>
									</Page>
								}
							></Route>
						);
					})}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
