import { useState } from "react";
import { toggleFavorite } from "../../Utils/toggleFavorite";
import { ActionIcon } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";

const Favorite = ({ movie, classes, newColor, reload }) => {
	const initialFavorites =
		JSON.parse(localStorage.getItem("favoriteMovies")) || [];
	const [favorites, setFavorites] = useState(initialFavorites);

	const isFavorite = favorites.includes(movie.id);

	const color = isFavorite ? "red" : newColor || "#F3F4F680";

	const handleIconClick = (movieid) => {
		toggleFavorite(movieid);
		setFavorites((prevFavorites) => {
			if (isFavorite && reload !== "true") {
				return prevFavorites.filter((favId) => favId !== movieid);
			} else if (isFavorite && reload === "true") {
				prevFavorites.filter((favId) => favId !== movieid);
				window.location.reload();
			} else {
				return [...prevFavorites, movieid];
			}
		});
	};

	return (
		<ActionIcon
			className={classes}
			radius={"xl"}
			variant="filled"
			bg={color}
			onClick={() => handleIconClick(movie.id)}
		>
			<IconHeartFilled size={19} />
		</ActionIcon>
	);
};

export default Favorite;
