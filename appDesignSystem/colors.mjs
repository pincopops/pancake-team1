/**
 * *INIZIALIZZO LA CLASSE COLOR PER GESTIRE LE VARIABILI DEI COLORI CON UN ARRAY
 */


class Color {
	constructor(name, hex) {
		this.name = name;
		this.hex = hex;
	}

	colorMaker() {
		
		const itemPalette = document.createElement('div')
		itemPalette.classList.add("wrapper-colors-unit-palette");
		itemPalette.style.backgroundColor = this.hex

		const itemInfo = document.createElement('div')
		itemInfo.classList.add("wrapper-colors-unit-info");
		itemInfo.innerHTML = `<p>${this.name}</p>
			<p>${this.hex}</p>`;

		itemPalette.addEventListener("click", () => {
			navigator.clipboard.writeText(this.hex);
			alert("HEX copiato negli appunti: " + this.hex);
		});

		const colorUnitWrapper = document.createElement("div");
		colorUnitWrapper.classList.add("wrapper-colors-unit")
		colorUnitWrapper.append(itemPalette, itemInfo);
		const wrapperColors = document.querySelector(".wrapper-colors");
		wrapperColors.appendChild(colorUnitWrapper);
	}

}

export const colorsArr = [
	new Color("$primary", "#666171"),
	new Color("$darkBlack", "#08060b"),
	new Color("$blackBrand", "#191326"),
	new Color("$lightBlack", "#222222"),
	new Color("$borderBlack", "#262130"),
	new Color("$darkGray3", "#383241"),
	new Color("$darkGray2", "#3c3742"),
	new Color("$darkGray1", "#27262c"),
	new Color("$gray", "#999999"),
	new Color("$lightGray", "#cccccc"),
	new Color("$borderGray", "#565065"),
	new Color("$violetBrand", "#7645d9"),
	new Color("$violetBrand2", "#9a6aff"),
	new Color("$lightViolet", "#f4eeff"),
	new Color("$lightViolet2", "#b8add2"),
	new Color("$subTitleViolet", "#7a6eaa"),
	new Color("$blueBrand", "#1155cc"),
	new Color("$darkBlue", "#280d5f"),
	new Color("$darkBlue2", "#3c1786"),
	new Color("$tabBlue", "#372f47"),
	new Color("$hoverMenu", "#353547"),
	new Color("$pinkBrand", "#ed4b9e"),
	new Color("$ocra", "#ffb237"),
	new Color("$whiteBrand", "#ffffff"),
	new Color("$tiffanyBrand", "#1fc7d4"),
	new Color("$greenBrand", "#29910d"),
	new Color("$trasparency", "#00000000"),
	new Color("$hoverEffect", "#08060b00"),
	new Color("$ocra2", "#ffcd51"),
];


const colorsWrapperEl = document.querySelector(".colors-container");
const colorsTitle = document.createElement("h1");
colorsTitle.innerText = "Colors";
colorsWrapperEl.insertBefore(colorsTitle, colorsWrapperEl.firstChild);