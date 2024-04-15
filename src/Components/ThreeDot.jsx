import { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const ThreeDot = () => {
	const [tdVisible, setTdVisible] = useState(false);

	const data = [
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg", "text": "Notification Preferences" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg", "text": "24x7 Customer Care" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg", "text": "Advertise" },
		{ "icon": "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg", "text": "Download App" },
	]

	return (
		<>
			<button className="relative p-2 rounded-md hover:p-2 hover:border-2 hover:rounded-md"
				onMouseEnter={() => setTdVisible(!tdVisible)}
				onMouseLeave={() => setTdVisible(!tdVisible)}
			>
				<PiDotsThreeVerticalBold />
			</button>
			<div className={`absolute top-14 rounded-b-lg left-[81.8%] z-10 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-white ${tdVisible ? 'block' : 'hidden'}`}>
				{data.map((e, ind) =>
					<div key={ind} className="flex items-center m-4 gap-3 text-sm">
						<img src={e.icon} alt={e.text} className="h-4 w-4" />
						<p>{e.text}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default ThreeDot
