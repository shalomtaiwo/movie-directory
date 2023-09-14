import {
	Alert,
	Badge,
	Button,
	Flex,
	Navbar,
	ScrollArea,
	Text,
	createStyles,
} from "@mantine/core";
import {
	IconHome,
	IconVideo,
	IconDeviceTv,
	IconCalendar,
	IconLogout,
	IconHeartPlus,
} from "@tabler/icons-react";
import Logo from "../Navbar/Logo";
import { LinksGroup } from "./SidebarLinks";
import { useNavigate } from "react-router-dom";

const mockdata = [
	{ label: "Home", icon: IconHome, link: "/" },
	{ label: "Movies", icon: IconVideo, link: "/movies" },
	{ label: "My Favorites", icon: IconHeartPlus, link: "/my_favorites" },
	{ label: "Tv Series", icon: IconDeviceTv, link: "/tv_series" },
	{ label: "Upcoming", icon: IconCalendar, link: "/upcoming" },
];

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.colors.white,
		padding: "10px 0 !important",
		borderRadius: "0 40px 40px 0",
		borderColor: "#0000004D",
	},

	div: {
		display: "flex",
		alignItems: "center",
		height: "70px",
		width: "100%",
	},

	links: {
		margin: "20px 0 0 0 !important",
		padding: "0 !important",
	},

	linksInner: {
		padding: 0,
	},

	footer: {
		padding: "20px",
	},
}));

export function Sidebar() {
	const { classes } = useStyles();

	const navigate = useNavigate();

	const links = mockdata.map((item) => (
		<LinksGroup
			{...item}
			key={item.label}
		/>
	));

	return (
		<Navbar
			zIndex={120}
			p="md"
			hidden={true}
			hiddenBreakpoint={"sm"}
			width={{ lg: 250, md: 250, sm: 250 }}
			className={classes.navbar}
		>
			<Navbar.Section>
				<div className={classes.div}>
					<Flex
						justify={"space-between"}
						w={"100%"}
						align={"center"}
						p={"5px 15px"}
					>
						<div>
							<Logo color={"black"} />
						</div>
					</Flex>
				</div>
			</Navbar.Section>
			<Navbar.Section
				grow
				className={classes.links}
				mx="xs"
				px="xs"
				component={ScrollArea}
			>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section>
				<Alert
					title={
						<Text color="#666666">
							Play movie quizzes <br />and earn <br /> free tickets
						</Text>
					}
					color="red"
					variant="outline"
					mr={20}
					ml={20}
					pt={20}
					radius={20}
					bg={'#F8E7EB66'}
				>
					<Text color={"#666666"}>50k people are playing now</Text>
					<Badge mt={10} bg={'#BE123C33'} style={{color: '#BE123C'}}>Start playing</Badge>
				</Alert>
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<Button
					variant="unstyled"
					leftIcon={<IconLogout color="gray" />}
					onClick={() => navigate("/")}
				>
					Log out
				</Button>
			</Navbar.Section>
		</Navbar>
	);
}
