import { Outlet } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

export default function Dashboard() {

	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}
