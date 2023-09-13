import {
	AppShell,
	useMantineTheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar/Sidebar";

export default function Dashboard() {
	const theme = useMantineTheme();
	return (
		<AppShell
			styles={{
				main: {
					background:theme.colors.white,
				},
			}}

			navbar={
					<Sidebar theme={theme} />
			}
		>
			<Outlet />
		</AppShell>
	);
}
