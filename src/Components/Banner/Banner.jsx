import {
	createStyles,
	Container,
	Title,
	Text,
	Button,
	rem,
	Paper,
	Image,
	Loader,
	Center,
} from "@mantine/core";
import { IconCircleCaretRight } from "@tabler/icons-react";
import { Navbar } from "../Navbar/NavBar";
import Rating from "../Rating/Rating";
import useAxios from "axios-hooks";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
	root: {
		paddingBottom: `calc(${theme.spacing.xl})`,
	},

	inner: {
		display: "flex",
		width: "100vw",
		height: "100vh",
		justifyContent: "space-between",
		backgroundColor: "#000",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
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
		paddingTop: `calc(${theme.spacing.xl} * 5)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		marginRight: `calc(${theme.spacing.xl} * 3)`,
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		height: '100%',

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

	const navigate = useNavigate();

	const apiToken = import.meta.env.VITE_API_TOKEN;

	const [{ data, loading, error }] = useAxios({
		method: "GET",
		url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${apiToken}`,
		},
	});
	const movieData = data?.results;

	function Slide({ data, classes, img }) {
		return (
			<Carousel.Slide
				className={classes.inner}
				style={{
					backgroundImage: `linear-gradient(250deg, rgb(16, 16, 16, 0.5) 0%, #000 180%), url(https://image.tmdb.org/t/p/original${img})`,
				}}
			>
				<Container
					size={"lg"}
					w={"100%"}
				>
					<div className={classes.content}>
						<Title className={classes.title}>{data.title}</Title>

						<Paper
							w={250}
							bg={"transparent"}
						>
							<Rating
								imdb={86.0}
								rate={97}
							/>
						</Paper>

						<Text
							className={classes.description}
							mt={20}
							lineClamp={4}
						>
							{data.overview}
						</Text>

						<Button
							variant="filled"
							color="red"
							leftIcon={<IconCircleCaretRight />}
							className={classes.control}
							mt={40}
							onClick={() => navigate(`/movies/${data.id}`)}
						>
							Get started
						</Button>
					</div>
				</Container>
			</Carousel.Slide>
		);
	}

	if (loading)
		return (
			<Center mt={30}>
				<Loader color="red" />
			</Center>
		);
	if (error)
		return (
			<>
				<Container
					size={"lg"}
					w={"100%"}
					style={{
						position: "absolute",
						top: 0,
						right: 0,
						left: 0,
						zIndex: 9999,
					}}
				>
					<Navbar>{children}</Navbar>
				</Container>
				<div className={classes.root}>
					<div
						className={classes.inner}
						style={{
							backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #000 180%), url(https://res.cloudinary.com/dg8os5pul/image/upload/v1694381265/personal/image_4_wbhv0q.png)`,
						}}
					>
						<Container
							size={"lg"}
							w={"100%"}
						>
							<div className={classes.content}>
								<Title className={classes.title}>
									John Wick 3 :<br /> Parabellum
								</Title>

								<Paper
									w={250}
									bg={"transparent"}
								>
									<Rating
										imdb={86.0}
										rate={97}
									/>
								</Paper>

								<Text
									className={classes.description}
									mt={20}
								>
									John Wick is on the run after killing a member <br />
									of the international assassins&lsquo; guild, and with <br />a
									$14 million price tag on his head, he is the <br />
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
						</Container>
						<Image
							className={classes.paginate}
							maw={30}
							src={
								"https://res.cloudinary.com/dg8os5pul/image/upload/v1694419962/personal/pageniation_u8xb4w.png"
							}
						/>
					</div>
				</div>
			</>
		);
	return (
		<>
			<Container
				size={"lg"}
				w={"100%"}
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					left: 0,
					zIndex: 9999,
				}}
			>
				<Navbar>{children}</Navbar>
			</Container>
			<Carousel
				className={classes.root}
				loop
				withControls={false}
				withIndicators
				orientation="vertical"
				height={"98vh"}
			>
				{!loading &&
					movieData.slice(0, 5).map((data, index) => {
						return (
							<div key={index}>
								<Slide
									classes={classes}
									data={data}
									img={data.backdrop_path}
								/>
							</div>
						);
					})}
			</Carousel>
		</>
	);
}
