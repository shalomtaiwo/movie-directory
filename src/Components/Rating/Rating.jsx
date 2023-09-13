import { Flex, Image, Text, ThemeIcon } from "@mantine/core";

const Rating = ({ imdb, rate, im, ra, color }) => {
	return (
		<Flex
			justify={"space-between"}
			align={"center"}
			w={"100%"}
			mt={20}
		>
			<Flex
				align={"center"}
				justify={"center"}
			>
				<Image
					w={`${im || 50}px !important`}
					src={
						"https://res.cloudinary.com/dg8os5pul/image/upload/v1694425239/personal/imdb_tjfxzi.png"
					}
					alt="imdb"
				/>
				<Text
					ml={10}
					color={color || "white"}
					w={80}
				>
					{imdb} / 100
				</Text>
			</Flex>
			<Flex
				align={"center"}
				justify={"flex-end"}
			>
				<Image
					w={`${ra || 30}px !important`}
					src={
						"https://res.cloudinary.com/dg8os5pul/image/upload/v1694425237/personal/tomato_yrgmez.png"
					}
					alt="rate"
				/>
				<Text
					ml={10}
					color={color || "white"}
				>
					{Math.round(rate)}%
				</Text>
			</Flex>
		</Flex>
	);
};

export default Rating;
