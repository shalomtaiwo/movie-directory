import {
	createStyles,
	Anchor,
	Group,
	ActionIcon,
	rem,
	Text,
} from "@mantine/core";
import {
	IconBrandInstagram,
	IconBrandTwitterFilled,
	IconBrandFacebookFilled,
	IconBrandYoutubeFilled,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: rem(10),
	},

	inner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: `${theme.spacing.md} ${theme.spacing.md}`,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
		},
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.lg,
			marginBottom: theme.spacing.sm,
		},
	},
}));

const links = [
	{
		link: "#",
		label: "Conditions of Use",
	},
	{
		link: "#",
		label: "Privacy & Policy",
	},
	{
		link: "#",
		label: "Press Room",
	},
];

export function FooterCentered() {
	const { classes } = useStyles();
	const items = links.map((link) => (
		<Anchor
			color="dark"
			fw={700}
            m={'0px 10px'}
			key={link.label}
			href={link.link}
			sx={{ lineHeight: 1 }}
			onClick={(event) => event.preventDefault()}
			size="15px"
		>
			{link.label}
		</Anchor>
	));

	return (
		<div className={classes.footer}>
			<div className={classes.inner}>
				<Group
					spacing="xs"
					position="right"
					noWrap
					mb={20}
				>
					<ActionIcon
						size="lg"
						variant="unstyled"
					>
						<IconBrandFacebookFilled
							size="1.4rem"
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant="unstyled"
					>
						<IconBrandInstagram
							size="1.4rem"
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant="unstyled"
					>
						<IconBrandTwitterFilled
							size="1.4rem"
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant="unstyled"
					>
						<IconBrandYoutubeFilled
							size="1.4rem"
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>

				<Group className={classes.links}>{items}</Group>

				<Group mt={20}>
					<Text color="dimmed">© 2021 MovieBox by Adriana Eka Prayudha </Text>
				</Group>
			</div>
		</div>
	);
}
