import {
	createStyles,
	Container,
	Title,
	Text,
	Button,
	rem,
	Paper,
	Image,
} from "@mantine/core";
import { IconCircleCaretRight } from "@tabler/icons-react";
import { Navbar } from "../Navbar/NavBar";
import Rating from "../Rating/Rating";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: "#000",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundImage:
			"linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #000 180%), url(https://res.cloudinary.com/dg8os5pul/image/upload/v1694381265/personal/image_4_wbhv0q.png)",
		paddingBottom: `calc(${theme.spacing.xl})`,
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
		},
	},

	image: {
		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	content: {
		paddingTop: `calc(${theme.spacing.xs})`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan("md")]: {
			marginRight: 0,
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

	control: {
		width: "169px",
		height: "40px",
		padding: "6px 16px 6px 16px",
		borderRadius: "6px",
		gap: "8px",
		backgroundColor: "#BE123C",

		[theme.fn.smallerThan("xs")]: {
			width: "100%",
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

export function Banner({ children }) {
	const { classes } = useStyles();
	return (
		<div className={classes.root}>
			<Container size="lg">
				<Paper>
					<Navbar>
						{children}
					</Navbar>
				</Paper>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							John Wick 3 :<br /> Parabellum
						</Title>

						<Paper w={250} bg={'transparent'}><Rating imdb={86.0} rate={97} /></Paper>

						<Text
							className={classes.description}
							mt={20}
						>
							John Wick is on the run after killing a member <br />
							of the international assassins&lsquo; guild, and with <br />a $14
							million price tag on his head, he is the <br />
							target of hit men and women everywhere.
						</Text>

						<Button
							variant="filled"
							color="red"
							leftIcon={<IconCircleCaretRight />}
							className={classes.control}
							mt={40}
						>
							Get started
						</Button>
					</div>
					<Image
						className={classes.paginate}
						maw={30}
						src={
							"https://res.cloudinary.com/dg8os5pul/image/upload/v1694419962/personal/pageniation_u8xb4w.png"
						}
					/>
				</div>
			</Container>
		</div>
	);
}
