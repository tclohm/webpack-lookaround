import nav from "./nav";
import { top, bottom as btm } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

// MARK: -- webpack does tree shaking! What are you using and that's it!
console.log(
	nav(),
	top,
	btm,
	button,
	makeButton("First!"),
	makeColorStyle("marigold")
);
