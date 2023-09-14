import { AppShell, useMantineTheme } from "@mantine/core";
import { Sidebar } from "../Sidebar/Sidebar";

export default function Layout({ children }) {
	const theme = useMantineTheme();
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colors.white,
				},
			}}
			navbar={<Sidebar theme={theme} />}
		>
			{children}
		</AppShell>
	);
}
