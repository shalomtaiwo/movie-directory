/* eslint-disable react/prop-types */
import {
	Anchor,
	BackgroundImage,
	Button,
	Center,
	Flex,
	Grid,
	Paper,
	Stack,
	Text,
	ThemeIcon,
	createStyles,
} from "@mantine/core";
import { IconList, IconTicket } from "@tabler/icons-react";
import useAxios from "axios-hooks";

const useStyles = createStyles(() => ({
	button: {
		backgroundColor: "#BE123C !important",
		"&hover": {
			backgroundColor: "#BE123C !important",
		},
	},
	buttonOutline: {
		backgroundColor: "#BE123C1A !important",
		border: "1px solid #BE123C !important",
		color: "black",
		"&hover": {
			backgroundColor: "#BE123C1A !important",
		},
	},
	text: {
		color: "#BE123C !important",
	},
}));

const SingleDetails = ({ data }) => {
	const { classes } = useStyles();

	const [{ data: getCredits, loading, error }] = useAxios({
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${data?.id}/credits`,
		headers: {
			accept: "application/json",
			Authorization:
				`Bearer ${import.meta.env.VITE_API_TOKEN}`,
		},
	});

	// Get crew member with job "Producer"
	const producers =
		!loading &&
		getCredits?.crew?.filter((crewMember) => crewMember.job === "Producer");

	// Get the top 3 cast members and filter out duplicates by name
	const top3Cast =
		!loading &&
		getCredits.cast
			.slice(0, 3)
			.filter(
				(castMember, index, self) =>
					self.findIndex((c) => c.name === castMember.name) === index
			);

	// Get crew members with known_for_department "Writing"
	const writers =
		!loading &&
		getCredits.crew
			.filter((crewMember) => crewMember.known_for_department === "Writing")
			.filter(
				(crewMember, index, self) =>
					self.findIndex((c) => c.name === crewMember.name) === index
			);
	const top3Writers = !loading && writers?.slice(0, 3);

	if (error) return <div>Error loading crews and casts.</div>;
	if (loading) return <div>Loading...</div>;

	return (
		<Paper
			mt={25}
			w={"100%"}
		>
			<Grid grow>
				<Grid.Col span={6}>
					<Text
						lineClamp={3}
						data-testid={"movie-overview"}
					>
						{data?.overview}
					</Text>
					<Stack mt={30}>
						<Text>
							Director :{" "}
							<Anchor className={classes.text}>
								{producers[0]?.name !== "" ? producers[0]?.name : "N/A"}
							</Anchor>{" "}
						</Text>
						<Text>
							Writers :{" "}
							{top3Writers?.length > 0
								? top3Writers?.map((cast, index) => {
										return (
											<Anchor
												key={index}
												className={classes.text}
											>
												{cast.name}
												{index < top3Writers.length - 1 ? ", " : ""}{" "}
											</Anchor>
										);
								})
								: "N/A"}
						</Text>
						<Text>
							Stars :{" "}
							{top3Cast?.length > 0
								? top3Cast?.map((cast, index) => {
										return (
											<Anchor
												key={index}
												className={classes.text}
											>
												{cast.name}
												{index < top3Cast.length - 1 ? ", " : ""}{" "}
											</Anchor>
										);
								})
								: "N/A"}
						</Text>
					</Stack>
				</Grid.Col>
				<Grid.Col span={"auto"}>
					<Center>
						<Stack>
							<Button
								w={360}
								radius={8}
								mr={10}
								leftIcon={<IconTicket size={19} />}
								className={classes.button}
								color="white"
							>
								See Showtimes
							</Button>
							<Button
								w={360}
								radius={8}
								leftIcon={<IconList size={19} />}
								className={classes.buttonOutline}
							>
								More watch options
							</Button>
							<BackgroundImage
								src="https://res.cloudinary.com/dg8os5pul/image/upload/v1694550083/personal/image_5_mtsafl.png"
								radius="sm"
								h={220}
							>
								<Flex
									align={"flex-end"}
									justify={"center"}
									h={"100%"}
								>
									<Paper
										w={"100%"}
										h={42}
										bg={"rgb(16,16,16, 0.7)"}
									>
										<Text
											color="#fff"
											align="center"
											mt={8}
										>
											<Flex
												align={"center"}
												justify={"center"}
											>
												<ThemeIcon variant="unstyled">
													<IconList size={18} />
												</ThemeIcon>
												<span>The Best Movies and Shows in September</span>
											</Flex>
										</Text>
									</Paper>
								</Flex>
							</BackgroundImage>
						</Stack>
					</Center>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default SingleDetails;
