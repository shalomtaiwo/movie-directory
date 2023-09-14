import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import {
	Container,
	Flex,
	Grid,
	Header,
	Paper,
	Skeleton,
	Title,
	createStyles,
	rem,
} from "@mantine/core";
import MovieCard from "../../Components/Card/MovieCard";
import { useEffect, useState } from "react";
import NoRecords from "../../Components/Empty/NoRecords";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: "#fff",
		paddingBottom: `calc(${theme.spacing.xl})`,
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
		},
	},

	content: {
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        width: '100%',

		[theme.fn.smallerThan("md")]: {
			marginRight: 5,
		},
	},

	title: {
		color: theme.white,
		fontWeight: 700,
		lineHeight: 1.35,
		maxWidth: rem(500),
		fontSize: rem(48),

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			fontSize: rem(34),
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: rem(500),

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
		},
	},

	paginate: {
		position: "absolute",
		right: "50px",
		top: "40%",

		[theme.fn.smallerThan("xs")]: {
			display: "none",
		},
	},
}));

const MyFavorites = () => {
	const { classes } = useStyles();

	const apiToken = import.meta.env.VITE_API_TOKEN;

	const favoriteMovieIds =
		JSON.parse(localStorage.getItem("favoriteMovies")) || [];
	const [favoriteMovies, setFavoriteMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchMovieDetails = async (movieId) => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${movieId}`,
				{
					headers: {
						accept: "application/json",
						Authorization: `Bearer ${apiToken}`,
					},
				}
			);
			setTimeout(() => {
				setLoading(false);
			}, 1500);
			return response.data;
		} catch (error) {
			console.error("Error fetching movie details:", error);
			return null;
		}
	};

	useEffect(() => {
		const loadFavoriteMovies = async () => {
			const movieDetails = await Promise.all(
				favoriteMovieIds.map(async (movieId) => fetchMovieDetails(movieId))
			);

			const validMovieDetails = movieDetails.filter((movie) => movie !== null);
			setFavoriteMovies(validMovieDetails);
		};

		loadFavoriteMovies();
	}, []);

	return (
		<Layout>
			<div className={classes.root}>
				<Container size="lg">
					<div className={classes.inner}>
						<div className={classes.content}>
							<Header>
								<Flex
									justify={"end"}
									p={"10px 20px"}
								>
									<Title order={2}>My Favorites</Title>
								</Flex>
							</Header>
							<Grid gutter={40}>
								{favoriteMovies.map((movie, index) => (
									<Grid.Col
										sm={6}
										md={4}
										lg={3}
										key={index}
									>
										<Skeleton visible={loading}>
											<MovieCard movie={movie} reload={'true'} />
										</Skeleton>
									</Grid.Col>
								))}
							</Grid>
							{favoriteMovies?.length < 1 && (
									<NoRecords />
							)}
						</div>
					</div>
				</Container>
			</div>
		</Layout>
	);
};

export default MyFavorites;
