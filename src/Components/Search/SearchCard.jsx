import {
	createStyles,
	Card,
	Image,
	Text,
	Group,
	Anchor,
	Badge,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.white,
	},

	title: {
		fontWeight: 700,
		lineHeight: 1.2,
	},

	body: {
		padding: theme.spacing.md,
	},
}));

/* eslint-disable-next-line react/prop-types */
export function SearchCard({ poster_path, release_date, title, id }) {
	const { classes } = useStyles();
	return (
		<Card
			withBorder
			radius="md"
			p={0}
			className={classes.card}
		>
			<Group
				noWrap
				spacing={0}
			>
				<Image
					src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : null}
                    withPlaceholder
					height={180}
					width={140}
				/>
				<div className={classes.body}>
					<Text
						transform="uppercase"
						color="dimmed"
						weight={700}
						size="xs"
					>
						{release_date}
					</Text>
					<Text
						className={classes.title}
						mt="xs"
						mb="md"
					>
						{title}
					</Text>
					<Group
						noWrap
						spacing="xs"
					>
						<Anchor href={`/movies/${id}`}>
							<Badge color="red" size={20}>View more</Badge>
						</Anchor>
					</Group>
				</div>
			</Group>
		</Card>
	);
}
