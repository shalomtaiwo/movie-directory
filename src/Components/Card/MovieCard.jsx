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

export default function MovieCard({ movie }) {
	const { classes } = useStyles();

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
				variant="light"
				radius={"xl"}
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