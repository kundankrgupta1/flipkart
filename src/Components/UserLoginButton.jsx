import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const UserLoginButton = () => {
	const [visible, setVisible] = useState(false);

	const data = [
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg", "text": "my profile" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg", "text": "flipkart plus zone" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg", "text": "orders" },
		{ "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=", "text": "wishlish" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg", "text": "rewards" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg", "text": "gift cards" }
	]
	return (
		<>
			<button className="flex gap-2 items-center hover:bg-blue-800 hover:text-white hover:rounded-md w-50 p-2 relative group"
				onMouseEnter={() => setVisible(!visible)}
				onMouseLeave={() => setVisible(!visible)}
			>
				<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="user-icon" className="" />
				Login
				<IoIosArrowDown />
			</button>
			<div className={`max-w-96 rounded-b-lg z-10 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] absolute top-14 ${visible ? 'block' : 'hidden'} `}>
				<div className="flex gap-10 p-3">
					<p>New Customer?</p><p className="text-blue-800 font-semibold">Sign Up</p>
				</div>
				<hr />
				{data.map((e, ind) =>
					<div key={ind} className="flex items-center gap-3 m-3">
						<img src={e.icon} />
						<p className="capitalize">{e.text}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default UserLoginButton