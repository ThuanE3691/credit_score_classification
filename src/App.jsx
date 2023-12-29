import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import routes from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { clsx } from "clsx";

function App() {
	return (
		<div className="relative ">
			<Router>
				<Routes>
					{routes.map((route, index) => {
						const Page = route.component;
						return (
							<Route
								path={route.path}
								key={index}
								element={
									<main
										className={clsx(
											"relative",
											route.canScroll === false && "overflow-hidden"
										)}
									>
										<Page>
											<Navbar isLight={route.isLight}></Navbar>
										</Page>
									</main>
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
