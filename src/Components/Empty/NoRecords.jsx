import {
	createStyles,
	Container,
	rem,
	Flex,
	Skeleton,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(80),
		width: "100%",
	},

	title: {
		fontWeight: 900,
		fontSize: rem(34),
		marginBottom: theme.spacing.md,

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(32),
		},
	},

	control: {
		[theme.fn.smallerThan("sm")]: {
			width: "100%",
		},
	},
}));

export default function NoRecords() {
	const { classes } = useStyles();

	return (
		<Container className={classes.root}>
			<Flex
				justify={"center"}
				align={"center"}
				direction={"column"}
			>
				<Skeleton
					height={20}
				/>
				<Skeleton
					height={40}
					mt={20}
				/>
				<Skeleton
					height={60}
					mt={20}
				/>
				<Skeleton
					height={70}
					mt={20}
					width="70%"
				/>
				<Skeleton
					height={80}
					mt={20}
					width="70%"
				/>
			</Flex>
		</Container>
	);
}
