import { MantineProvider } from "@mantine/core";
import Routes from "./Routes";

export default function App() {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
		>
			<div id="assistant-widget"></div>
			<Routes />
		</MantineProvider>
	);
}
