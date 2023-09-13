import MovieCard from "../Card/MovieCard";
import useAxios from "axios-hooks";
import { Container, Grid, createStyles, rem } from "@mantine/core";
import { ServerError } from "../Empty/Error";

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

const Featured = () => {
	const { classes } = useStyles();

	const apiToken = import.meta.env.VITE_API_TOKEN;

	const [{ data, loading, error }] = useAxios({
		method: "GET",
		url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
		headers: {
			accept: "application/json",
			Authorization:
				`Bearer ${apiToken}`,
		},
        
	});
	const movieData = data?.results;

	if (loading) return <p>Loading...</p>;
	if (error) return <ServerError error={error.status} />;

	return (
        <div className={classes.root}>
			<Container size="lg">
				<div className={classes.inner}>
					<div className={classes.content}>
                    <Grid gutter={40}>
					{!loading &&
						(movieData.slice(0, 10)).map((movie, index) => {
							return (
								<Grid.Col
									key={index}
                                    sm={6}
									md={4}
									lg={3}
								>
									<MovieCard movie={movie} />
								</Grid.Col>
							);
						})}
				</Grid>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Featured;
