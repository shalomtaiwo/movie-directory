import {
	Group,
	Box,
	ThemeIcon,
	UnstyledButton,
	createStyles,
    Text,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
	control: {
		fontWeight: 500,
		display: "block",
		width: "100%",
        padding: '0 !important',
		color: theme.black,
		fontSize: theme.fontSizes.sm,

		"&:hover": {
			backgroundColor: theme.colors.gray[1],
			color: theme.black,
		},
	},

	link: {
		fontWeight: 700,
		display: "block",
		textDecoration: "none !important",
		fontSize: theme.fontSizes.sm,
        padding: '20px !important',
		color: '#BE123C',
        backgroundColor: theme.colors.red[1],
        borderRight: '6px #BE123C solid'
	},

    linkNone: {
		fontWeight: 500,
		display: "block",
		textDecoration: "none !important",
		fontSize: theme.fontSizes.sm,
        padding: '20px !important',
		color: theme.colors.gray[7],

		"&:hover": {
			backgroundColor: theme.colors.gray[1],
			color: theme.black,
		},
	},

}));

export function LinksGroup({ icon: Icon, label, links, link }) {

	const { classes } = useStyles();

	return (
		<>
			<UnstyledButton className={classes.control}>
				<NavLink
					to={link && link}
					className={({ isActive }) => (isActive ? classes.link : classes.linkNone)}
				>
					<Group
						position="apart"
						spacing={0}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<ThemeIcon
								variant="light"
								size={30}
                                bg={'transparent'}
								color={"dark"}
							>
								<Icon size={18} />
							</ThemeIcon>
							<Text ml="md">{label}</Text>
						</Box>
					</Group>
				</NavLink>
			</UnstyledButton>
		</>
	);
}
