import { Routes as MovieRoute, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Dashboard/Dashboard";
import Single from "./Dashboard/Pages/Single";
import Empty from "./Components/Empty/Empty";
import { NoSearch } from "./Dashboard/NoSearch";

const Routes = () => {
	return (
		<MovieRoute>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="movies"
				element={<Dashboard />}
			>
				<Route
					path="/movies"
					element={<NoSearch />}
				/>
				<Route
					path="/movies/:id"
					element={<Single />}
				/>
			</Route>
			<Route
				path="*"
				element={<Empty />}
			/>
		</MovieRoute>
	);
};

export default Routes;
