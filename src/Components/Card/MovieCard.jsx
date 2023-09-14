import {
	createStyles,
	Card,
	Image,
	ActionIcon,
	Group,
	Text,
	rem,
	Anchor,
} from "@mantine/core";
import Rating from "../Rating/Rating";
import { IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.white,
		border: "none !important",
		marginBottom: 40,
	},
	footer: {
		padding: `${theme.spacing.xs} 0`,
		marginTop: 0,
	},

	rating: {
		position: "absolute",
		top: theme.spacing.xs,
		right: rem(12),
	},
}));

// Function to add or remove a movie ID from favorites
function toggleFavorite(movieId) {
	// Check if the local storage for favorites exists
	let favorites = localStorage.getItem("favoriteMovies");
	if (!favorites) {
		favorites = [];
	} else {
		favorites = JSON.parse(favorites);
	}

	// Check if the movie ID is already in favorites
	const index = favorites.indexOf(movieId);
	if (index !== -1) {
		// Movie ID exists, remove it
		favorites.splice(index, 1);
	} else {
		// Movie ID doesn't exist, add it
		favorites.push(movieId);
	}
	localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
}

export default function MovieCard({ movie }) {
	const { classes } = useStyles();

	const initialFavorites =
		JSON.parse(localStorage.getItem("favoriteMovies")) || [];
	const [favorites, setFavorites] = useState(initialFavorites);

	const isFavorite = favorites.includes(movie.id);

	const color = isFavorite ? "red" : "#F3F4F680";

	const handleIconClick = (movieid) => {
		toggleFavorite(movieid);
		setFavorites((prevFavorites) => {
			if (isFavorite) {
				return prevFavorites.filter((favId) => favId !== movieid);
			} else {
				return [...prevFavorites, movieid];
			}
		});
	};

	return (
		<Card
			withBorder
			padding="lg 0"
			radius="xs"
			className={classes.card}
			data-testid={"movie-card"}
			id={movie.id}
		>
			<Card.Section mb="sm">
				<Anchor href={`/movies/${movie.id}`}>
					<Image
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
						w={185}
						data-testid={"movie-poster"}
					/>
				</Anchor>
			</Card.Section>

			<ActionIcon
				className={classes.rating}
				radius={"xl"}
				variant="filled"
				bg={color}
				onClick={() => handleIconClick(movie.id)}
			>
				<IconHeartFilled size={19} />
			</ActionIcon>

			<Text
				mt="xs"
				color="dimmed"
				size={12}
				data-testid={"movie-release-date"}
			>
				{movie.release_date}
			</Text>
			<Text
				fw={700}
				mt="xs"
				size={18}
				data-testid={"movie-title"}
			>
				{movie.title}
			</Text>

			<Rating
				im={35}
				ra={18}
				color={"black"}
				imdb={movie.vote_average}
				rate={movie.popularity}
			/>

			<Card.Section className={classes.footer}>
				<Group position="apart">
					<Text
						fz="xs"
						c="dimmed"
					>
						{movie.vote_count}
					</Text>
				</Group>
			</Card.Section>
		</Card>
	);
}
