import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	rem,
	Center,
	Anchor,
	Flex,
	Text,
	ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu } from "@tabler/icons-react";
import Logo from "./Logo";

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "transparent",
		padding: 0,
		[theme.fn.smallerThan("sm")]: {
			justifyContent: "center",
		},
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
	children: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},
	newChildren: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
	signIn: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},
}));

export function Navbar({ children }) {
	const { classes } = useStyles();
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<Header
			height={HEADER_HEIGHT}
			sx={{ border: 0, backgroundColor: "transparent !important" }}
			mb={100}
		>
			<Center
				spacing={5}
				pt={10}
				className={classes.newChildren}
			>
				<Center>{children}</Center>
			</Center>
			<Container
				className={classes.inner}
				fluid
			>
				<Group>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size="sm"
						color="white"
					/>
					<Logo />
				</Group>
				<Group
					spacing={5}
					className={classes.children}
				>
					<Center>{children}</Center>
				</Group>
				<Anchor
					className={classes.signIn}
					href="/movies"
				>
					<Flex align={"center"}>
						<Text color="white">Sign in</Text>
						<ThemeIcon
							radius={"xl"}
							size={"lg"}
							p={7}
							ml={10}
							color="#BE123C"
						>
							<IconMenu />
						</ThemeIcon>
					</Flex>
				</Anchor>
			</Container>
		</Header>
	);
}
