import { IoSearchOutline } from "react-icons/io5";

const Searchbar = () => {
  return (
	<div className="bg-[#F0F5FF] w-[650px] flex items-center p-2 rounded-md gap-2">
		<IoSearchOutline className="text-2xl" />
		<input type="text" className="w-full bg-inherit outline-none h-full" placeholder="Search for Products, Brands and More" />
	</div>
  )
}

export default Searchbar