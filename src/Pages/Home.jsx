import { Banner } from "../Components/Banner/Banner";
import Featured from "../Components/Featured/Featured";
import Search from "../Components/Search/Search";

const Home = () => {
	return (
		<div>
			<Banner>
				<Search />
			</Banner>

            <Featured />
		</div>
	);
};

export default Home;
