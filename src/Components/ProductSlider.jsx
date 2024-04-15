import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
		<div className="max-w-[1500px] m-auto pb-3 bg-white">
			<Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={4000} keyBoardControl={true}>

			{
				data.products.map((e, ind) =>
					<div key={ind} className="shadow-md m-2 p-2">
						<img src={e.image} alt="" />
						<p>{e.title}</p>
					</div>
				)
			}
			</Carousel>
		</div>
	)
}

export default ProductSlider