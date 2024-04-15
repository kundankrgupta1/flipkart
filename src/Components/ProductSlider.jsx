import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowForwardIos } from "react-icons/md";

import data from "../../db.json"
const ProductSlider = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 5,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 1
		}
	};
	return (
		<div className="w-[1500px] m-auto mb-3 flex gap-3">
			<div className="bg-white w-[1240px]">
				<div className="flex justify-between m-5">
					<p className="font-semibold text-lg text-black capitalize">best deals on smartphones</p>
					<MdArrowForwardIos className="bg-blue-700 p-1 text-2xl text-white rounded-full" />
				</div>
				<Carousel responsive={responsive}>
					{
						data.products.map((e, ind) =>
							<div key={ind} className="shadow-md p-2 w-[190px] text-center text-sm">
								<img src={e.image} alt={e.title} className="m-auto h-[170px]" />
								<p className="truncate font-semibold">{e.title}</p>
								<p>incl of Offers</p>
							</div>
						)
					}
				</Carousel>
			</div>
			<div className="w-[260px]">
				<img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/5aa445524bb3a205.png?q=20" alt="ad" className="w-full h-[320px]" />
			</div>
		</div>
	)
}

export default ProductSlider