import {
	createStyles,
	Image,
	Container,
	Title,
	Text,
	Button,
	SimpleGrid,
	rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(80),
		paddingBottom: rem(80),
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

	mobileImage: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	desktopImage: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},
}));

export default function Empty() {
	const { classes } = useStyles();

	const navigate = useNavigate();

	return (
		<Container className={classes.root}>
			<SimpleGrid
				spacing={80}
				cols={2}
				breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
			>
				<Image
					src={
						"https://res.cloudinary.com/dg8os5pul/image/upload/v1694520123/personal/image.11cd6c19_bza83n.svg"
					}
					className={classes.mobileImage}
				/>
				<div>
					<Title className={classes.title}>Something is not right...</Title>
					<Text
						color="dimmed"
						size="lg"
					>
						Page you are trying to open does not exist. You may have mistyped
						the address, or the page has been moved to another URL. If you think
						this is an error contact support.
					</Text>
					<Button
						variant="outline"
						color="gray"
						size="md"
						mt="xl"
						className={classes.control}
						onClick={() => navigate("/")}
					>
						Get back to home page
					</Button>
				</div>
				<Image
					src={
						"https://res.cloudinary.com/dg8os5pul/image/upload/v1694520123/personal/image.11cd6c19_bza83n.svg"
					}
					className={classes.desktopImage}
				/>
			</SimpleGrid>
		</Container>
	);
}
