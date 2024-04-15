import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sliders = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};
	return (
		<div className="max-w-[1500px] m-auto pb-3">
			<Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={4000} keyBoardControl={true} >
				<div><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4d279cfffa536c76.png?q=20" /></div>
				<div><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6ae41fa34edd171d.png?q=20" /></div>
				<div><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20" /></div>
				<div><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/25e306273d3609bc.jpg?q=20" /></div>
				<div><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d8d588a48aa73e4e.jpg?q=20" /></div>
			</Carousel>
		</div >
	)
}

export default Sliders