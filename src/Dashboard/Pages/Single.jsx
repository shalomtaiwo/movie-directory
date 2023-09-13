import {
	AspectRatio,
	Button,
	Flex,
	Rating,
	Text,
	createStyles,
} from "@mantine/core";
import useAxios from "axios-hooks";
import SingleDetails from "./SingleDetails";
import { NotFoundMovie } from "../../Components/Empty/NotFound";
import { ServerError } from "../../Components/Empty/Error";

const useStyles = createStyles((theme) => ({
	flex: {
		justifyContent: "space-between",
		[theme.fn.smallerThan("md")]: {
			justifyContent: "space-evenly",
		},
		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},
	flexTwo: {
		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
			width: "inherit",
			justifyContent: "flex-start",
		},
		[theme.fn.smallerThan("sm")]: {
			justifyContent: "flex-start",
		},
	},
}));

const Single = () => {
	const { classes } = useStyles();

	// Get movie Id
	const getId = () => {
		const url = window.location.href;
		const parts = url.split("/");
		const moviesIndex = parts.indexOf("movies");

		if (moviesIndex !== -1 && moviesIndex < parts.length - 1) {
			const slug = parts[moviesIndex + 1];
			return slug;
		} else {
			// No slug found
			console.log("No slug found. Returning null.");
		}
	};

	const [{ data, loading, error }] = useAxios({
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${getId()}?append_to_response=videos`,
		headers: {
			accept: "application/json",
			Authorization:
				`Bearer ${import.meta.env.VITE_API_TOKEN}`,
		},
	});

	// Convert date to UTC
	// const toUTC = (dateString) => {
	// 	return new Date(dateString + "T00:00:00Z").toISOString();
	// };

	// Convert abbreviate numbers
	const abbreviateNumber = (number) => {
		try {
			const abbreviations = ["", "k", "M", "B", "T"];
			const tier = (Math.log10(Math.abs(number)) / 3) | 0;

			if (tier === 0) return number;

			const suffix = abbreviations[tier];
			const scale = Math.pow(10, tier * 3);
			const abbreviatedNumber = (number / scale).toFixed(1) + suffix;

			return abbreviatedNumber;
		} catch (error) {
			console.log(`Error in Abbreviation ${error}`);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error && error.message === "Request failed with status code 404")
		return <NotFoundMovie />;
	if (error && error.message !== "Request failed with status code 404")
		return <ServerError error={error.status} />;

	return (
		<div>
			<AspectRatio ratio={16 / 6}>
				<iframe
					src={
						!loading &&
						`https://www.youtube.com/embed/${data?.videos?.results[0]?.key}`
					}
					title={data.title}
					frameBorder="0"
					style={{
						borderRadius: 30,
					}}
					allow="clipboard-write; encrypted-media; gyroscope;"
				/>
			</AspectRatio>

			<Flex
				align={"align"}
				mt={15}
				className={classes.flex}
			>
				<Flex
					w={"100%"}
					align={"center"}
					className={classes.flexTwo}
				>
					<Button
						mr={8}
						size={18}
						fw={500}
						variant="unstyled"
						data-testid={"movie-title"}
					>
						{data?.title}
					</Button>
					<Flex align={"center"}>
						<span style={{ fontSize: "4px", marginTop: "5px" }}>⚫</span>
						<Button
							ml={8}
							mr={8}
							size={18}
							fw={500}
							variant="unstyled"
							data-testid={"movie-release-date"}
						>
							{data?.release_date}
						</Button>
						<span style={{ fontSize: "4px", marginTop: "5px" }}>⚫</span>
						<Button
							ml={8}
							mr={8}
							size={18}
							fw={500}
							variant="unstyled"
						>
							PG-13
						</Button>
						<span style={{ fontSize: "4px", marginTop: "5px" }}>⚫</span>
						<Button
							ml={8}
							mr={8}
							size={18}
							fw={500}
							variant="unstyled"
							data-testid={"movie-runtime"}
						>
							{data?.runtime}
							{"m"}
						</Button>
					</Flex>
				</Flex>

				<Flex align={"center"}>
					<Rating
						defaultValue={1}
						count={1}
					/>
					<Text
						color="#e5edf5"
						mr={5}
					>
						{parseFloat(data?.vote_average.toFixed(1))}
					</Text>
					<span style={{ fontSize: "18px" }}>|</span>
					<Text
						ml={8}
						mr={8}
						size={18}
						color="dimmed"
					>
						{abbreviateNumber(data?.vote_count)}
					</Text>
				</Flex>
			</Flex>

			<SingleDetails data={data} />
		</div>
	);
};

export default Single;
