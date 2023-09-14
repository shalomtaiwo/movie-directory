// Function to add or remove a movie ID from favorites
export function toggleFavorite(movieId) {
	// Check if the local storage for favorites exists
	let favorites = localStorage.getItem("favoriteMovies");
	if (!favorites) {
		favorites = [];
	} else {
		favorites = JSON.parse(favorites);
	}

	// Check if the movie ID is already in favorites
	const index = favorites.indexOf(movieId);
	if (index !== -1) {
		// Movie ID exists, remove it
		favorites.splice(index, 1);
	} else {
		// Movie ID doesn't exist, add it
		favorites.push(movieId);
	}
	localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
}
