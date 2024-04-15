import Header from "./Components/Header";
import MenuItems from "./Components/MenuItems";
import ProductSlider from "./Components/ProductSlider";
import Sliders from "./Components/Sliders";
const App = () => {
	return (
		<div className="bg-[#F1F2F4]">
			<Header />
			<MenuItems />
			<Sliders />
			<ProductSlider />
		</div>
	)
}

export default App