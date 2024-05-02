import data from "../../db.json"
const MenuItems = () => {
	return (
		<div className="max-w-[1500px] m-auto bg-white my-3 flex gap-14 justify-center px-5 py-2">
			{data.category.map((e, ind) =>
				<div key={ind}>
					<img src={e.img} alt={e.name} className="w-[64px] h-[64px]" />
					<p className="flex items-center capitalize font-semibold">{e.name}</p>
				</div>
			)}
		</div>
	)
}

export default MenuItems