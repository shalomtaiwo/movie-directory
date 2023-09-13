import {
	createStyles,
	Title,
	Text,
	Button,
	Container,
	Group,
	rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(20),
		paddingBottom: rem(80),
		backgroundColor: theme.fn.variant({
			variant: "filled",
			color: 'red',
		}).background,
		zIndex: 999,
	},

	label: {
		textAlign: "center",
		fontWeight: 900,
		fontSize: rem(220),
		lineHeight: 1,
		marginBottom: `calc(${theme.spacing.xl} * 3)`,
		color: theme.colors.red[5],

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(120),
		},
	},

	title: {
		textAlign: "center",
		fontWeight: 900,
		fontSize: rem(38),
		color: theme.white,

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(32),
		},
	},

	description: {
		maxWidth: rem(540),
		margin: "auto",
		marginTop: theme.spacing.xl,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		color: 'white',
	},
}));

export function ServerError({ error }) {
	const { classes } = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<div className={classes.label}>{error}</div>
				<Title className={classes.title}>Something bad just happened...</Title>
				<Text
					size="lg"
					align="center"
					className={classes.description}
				>
					Our servers could not handle your request. Don&apos;t worry, our
					development team was already notified. Try refreshing the page.
				</Text>
				<Group position="center">
					<Button
						variant="white"
						size="md"
						color="red"
						onClick={()=> window.location.reload()}
					>
						Refresh the page
					</Button>
				</Group>
			</Container>
		</div>
	);
}
