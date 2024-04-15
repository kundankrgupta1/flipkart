import data from "../../db.json"
import Searchbar from "./Searchbar";
import UserLoginButton from "./UserLoginButton";
import ThreeDot from "./ThreeDot";
const Header = () => {
	return (
		<>
			<div className="shadow-md bg-white">
				<div className="max-w-[1450px] m-auto flex justify-between items-center p-4">
					{data.materials.map((e, ind) => <img src={e.logo} key={ind} />)}
					<Searchbar />
					<div className="flex justify-between items-center gap-10">
						<UserLoginButton />
						<button className="flex justify-between items-center gap-2">
							<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="cart-icon" /> Cart</button>
						<button className="flex justify-between items-center gap-2">
							<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="shop-icon" />
							Become a Seller</button>
						<ThreeDot />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header