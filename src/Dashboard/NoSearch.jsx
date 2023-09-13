import { Center, Paper, Title } from "@mantine/core";
import Search from "../Components/Search/Search";

export const NoSearch = () => {
	return (
		<Paper
			bg={"dark"}
			w={"100%"}
			h={"100%"}
			p={10}
		>
			<Center>
				<Search />
			</Center>
			<Center mt={30}>
				<Title color="white">Search for movie</Title>
			</Center>
		</Paper>
	);
};
