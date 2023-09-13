import {
	Center,
	CloseButton,
	Flex,
	Loader,
	Paper,
	Text,
	TextInput,
	createStyles,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import useAxios from "axios-hooks";
import React from "react";
import { ServerError } from "../Empty/Error";
import { SearchCard } from "./SearchCard";

const useStyles = createStyles((theme) => ({
	auto: {
		width: 525,
		borderRadius: "7px",
		padding: "5px",
		[theme.fn.smallerThan("md")]: {
			width: 400,
		},
		[theme.fn.smallerThan("sm")]: {
			width: 250,
		},
		[theme.fn.smallerThan("xs")]: {
			width: 200,
		},
	},
}));
const Search = () => {
	const { classes } = useStyles();

	const [query, setQuery] = React.useState("");
	const [movies, setMovies] = React.useState([]);
	const [focus, setFocus] = React.useState(false);

	const [{ data, loading, error }] = useAxios({
		method: "GET",
		url: `https://api.themoviedb.org/3/search/movie`,
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
		},
		params: {
			include_adult: false,
			language: "en-US",
			page: 1,
			query,
		},
	});

	React.useEffect(() => {
		const searchMovies = async () => {
			if (query.trim() === "") {
				setMovies([]);
				return;
			}

			try {
				setMovies(data.results);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		};

		searchMovies();
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [query]);

	if (error)
		return (
			<Center mt={"150px"}>
				<ServerError error={error.status} />
			</Center>
		);

	return (
		<>
			<TextInput
				type="text"
				placeholder="What do you want to watch?"
				value={query}
				onFocus={() => setFocus(true)}
				onChange={(e) => setQuery(e.target.value)}
				className={classes.auto}
				rightSection={
					<Flex align={"center"}>
						{query !== "" && (
							<CloseButton
								color={"red"}
								iconSize={20}
								onClick={() => setQuery("")}
							/>
						)}{" "}
						<IconSearch
							color="white"
							size={19}
						/>
					</Flex>
				}
			/>

			{focus && (
				<>
					{loading ? (
						<Paper
							className="dropdown"
							maw={500}
						>
							<Center
								className="dropdown-item"
								w={500}
							>
								<Loader color="red" />
							</Center>
						</Paper>
					) : (
						<div className="dropdown">
							{movies?.length > 0 ? (
								movies?.map((movie) => (
									<Paper
										key={movie?.id}
										className="dropdown-item"
										maw={500}
									>
										<SearchCard
											id={movie?.id}
											release_date={movie?.release_date}
											poster_path={movie?.poster_path}
											title={movie?.title}
										/>
									</Paper>
								))
							) : (
								<>
									{query === "" ? null : (
										<Text
											className="dropdown-item"
											w={500}
										>
											No related movie found.
										</Text>
									)}
								</>
							)}
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Search;
