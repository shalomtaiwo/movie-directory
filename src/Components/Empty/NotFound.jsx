import {
	createStyles,
	Title,
	Text,
	Button,
	Container,
	Group,
	rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(80),
		paddingBottom: rem(80),
	},

	label: {
		textAlign: "center",
		fontWeight: 900,
		fontSize: rem(220),
		lineHeight: 1,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		color: theme.colors.gray[2],

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(120),
		},
	},

	title: {
		textAlign: "center",
		fontWeight: 900,
		fontSize: rem(38),

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(32),
		},
	},

	description: {
		maxWidth: rem(500),
		margin: "auto",
		marginTop: theme.spacing.xl,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
	},
}));

export function NotFoundMovie() {
	const { classes } = useStyles();

	const navigate = useNavigate();

	return (
		<Container className={classes.root}>
			<div className={classes.label}>404</div>
			<Title className={classes.title}>You have found a secret place.</Title>
			<Text
				color="dimmed"
				size="lg"
				align="center"
				className={classes.description}
			>
				Unfortunately, the movie id is invalid. Add a valid movie id.
			</Text>
			<Group position="center">
				<Button
					variant="subtle"
					size="md"
                    color="gray"
					onClick={()=>navigate('/movies')}
				>
					Search for new movie
				</Button>
			</Group>
		</Container>
	);
}
