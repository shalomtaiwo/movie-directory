import { Flex, Text, ThemeIcon } from "@mantine/core";
import { IconDeviceTvOld } from "@tabler/icons-react";

const Logo = ({ color }) => {
	return (
		<Flex align={"center"}>
			<ThemeIcon
				radius={"xl"}
				size={50}
				mr={10}
				color="#BE123C"
			>
				<IconDeviceTvOld />
			</ThemeIcon>
			<Text
				color={color || "white"}
				size={24}
				lh={24}
				fw={700}
			>
				MovieBox
			</Text>
		</Flex>
	);
};

export default Logo;
