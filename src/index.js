import nav from "./nav";
const getFooter = () => import(
	/* webpackChunkName: "footer" */ "./footer");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(image);

button.addEventListener("click", e => {
	getFooter().then(({footer}) => {
		document.body.appendChild(footerModule.footer)
	})
})
