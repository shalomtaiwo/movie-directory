import { Banner } from "../Components/Banner/Banner";
import Featured from "../Components/Featured/Featured";
import { FooterCentered } from "../Components/Footer/Footer";
import Search from "../Components/Search/Search";

const Home = () => {
	return (
		<div>
			<Banner>
				<Search />
			</Banner>

            <Featured />

			<FooterCentered />
		</div>
	);
};

export default Home;
