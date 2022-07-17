class Color {
	constructor(name, hex) {
		this.name = name;
		this.hex = hex;
	}
}
const colorsArr = [
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
];

const unitColor = document.querySelectorAll(".wrapper-colors-unit");

unitColor.forEach((item, i) => {
	const itemPalette = item.querySelector(".wrapper-colors-unit-palette");
	itemPalette.style.backgroundColor = colorsArr[i].hex;

	const itemInfo = item.querySelector(".wrapper-colors-unit-info");
	itemInfo.innerHTML = `<p>${colorsArr[i].name}</p>
    <p>${colorsArr[i].hex}</p>`;
});

const colorsWrapperEl = document.querySelector(".colors-container");
const colorsTitle = document.createElement("h1");
colorsTitle.innerText = "Colors";
colorsWrapperEl.insertBefore(colorsTitle, colorsWrapperEl.firstChild);

/**
 * ?Icons
 */

const wrapperIcons = document.querySelector(".wrapper-icons");
const iconsTitle = document.createElement("h1");
iconsTitle.innerText = "Icons";
wrapperIcons.insertBefore(iconsTitle, wrapperIcons.firstChild);

class Icon {
	constructor(name, icon, url) {
		this.name = `asset ${name}`;
		this.icon = `icon ${icon}`;
		this.url = `./assets/${url}`;
	}
}

const iconsArr = [
	new Icon(0, 0, "asset 0.png"),
	new Icon(1, 1, "asset 1.svg"),
	new Icon(2, 2, "asset 2.png"),
	new Icon(3, 3, "asset 3.svg"),
	new Icon(4, 4, "asset 4.png"),
	new Icon(5, 5, "asset 5.svg"),
	new Icon(6, 6, "asset 6.png"),
	new Icon(7, 7, "asset 7.svg"),
	new Icon(8, 8, "asset 8.png"),
	new Icon(9, 9, "asset 9.png"),
	new Icon(10, 10, "asset 10.png"),
	new Icon(11, 11, "asset 11.png"),
	new Icon(12, 12, "asset 12.png"),
	new Icon(13, 13, "asset 13.png"),
	new Icon(14, 14, "asset 14.png"),
	new Icon(15, 15, "asset 15.png"),
	new Icon(16, 16, "asset 16.png"),
	new Icon(17, 17, "asset 17.png"),
	new Icon(18, 18, "asset 18.png"),
	new Icon(19, 19, "asset 19.png"),
	new Icon(20, 20, "asset 20.png"),
	new Icon(21, 21, "asset 21.png"),
	new Icon(22, 22, "asset 22.png"),
	new Icon(23, 23, "asset 23.png"),
	new Icon(24, 24, "asset 24.png"),
	new Icon(25, 25, "asset 25.png"),
	new Icon(26, 26, "asset 26.png"),
	new Icon(27, 27, "asset 27.png"),
	new Icon(28, 28, "asset 28.png"),
	new Icon(29, 29, "asset 29.png"),
	new Icon(30, 30, "asset 30.png"),
	new Icon(31, 31, "asset 31.png"),
	new Icon(32, 32, "asset 32.png"),
	new Icon(33, 33, "asset 33.png"),
	new Icon(34, 34, "asset 34.png"),
	new Icon(35, 35, "asset 35.png"),
	new Icon(36, 36, "asset 36.png"),
	new Icon(37, 37, "asset 37.png"),
	new Icon(38, 38, "asset 38.svg"),
	new Icon(39, 39, "asset 39.svg"),
	new Icon(40, 40, "asset 40.svg"),
	new Icon(41, 41, "asset 41.svg"),
	new Icon(42, 42, "asset 42.svg"),
	new Icon(43, 43, "asset 43.svg"),
	new Icon(44, 44, "asset 44.svg"),
	new Icon(45, 45, "asset 45.svg"),
	new Icon(46, 46, "asset 46.svg"),
	new Icon(47, 47, "asset 47.svg"),
	new Icon(48, 48, "asset 48.svg"),
	new Icon(49, 49, "asset 49.svg"),
	new Icon(50, 50, "asset 50.svg"),
	new Icon(51, 51, "asset 51.svg"),
	new Icon(52, 52, "asset 52.svg"),
	new Icon(53, 53, "asset 53.svg"),
	new Icon(54, 54, "asset 54.svg"),
	new Icon(55, 55, "asset 55.svg"),
	new Icon(56, 56, "asset 56.svg"),
	new Icon(57, 57, "asset 57.svg"),
	new Icon(58, 58, "asset 58.svg"),
	new Icon(59, 59, "asset 59.svg"),
	new Icon(60, 60, "asset 60.svg"),
	new Icon(61, 61, "asset 61.svg"),
	new Icon(62, 62, "asset 62.svg"),
	new Icon(63, 63, "asset 63.svg"),
	new Icon(64, 64, "asset 64.svg"),
	new Icon(65, 65, "asset 65.svg"),
	new Icon(66, 66, "asset 66.svg"),
	new Icon(67, 67, "asset 67.svg"),
	new Icon(68, 68, "asset 68.svg"),
	new Icon(69, 69, "asset 69.svg"),
	new Icon(70, 70, "asset 70.svg"),
	new Icon(71, 71, "asset 71.svg"),
	new Icon(72, 72, "asset 72.svg"),
	new Icon(73, 73, "asset 73.svg"),
	new Icon(74, 74, "tradeAssets/1.svg"),
	new Icon(75, 75, "tradeAssets/2.svg"),
	new Icon(76, 76, "tradeAssets/3.svg"),
	new Icon(77, 77, "tradeAssets/4.svg"),
	new Icon(78, 78, "tradeAssets/5.svg"),
	new Icon(79, 79, "tradeAssets/asset 0.png"),
	new Icon(80, 80, "tradeAssets/asset 1.png"),
	new Icon(81, 81, "tradeAssets/asset 2.png"),
	new Icon(82, 82, "tradeAssets/asset 3.svg"),
	new Icon(83, 83, "tradeAssets/asset 4.svg"),
	new Icon(84, 84, "tradeAssets/asset 5.svg"),
	new Icon(85, 85, "tradeAssets/asset 6.svg"),
	new Icon(86, 86, "tradeAssets/asset 7.svg"),
	new Icon(87, 87, "tradeAssets/asset 8.svg"),
	new Icon(88, 88, "tradeAssets/asset 9.svg"),
	new Icon(89, 89, "tradeAssets/asset 10.svg"),
	new Icon(90, 90, "tradeAssets/asset 11.svg"),
	new Icon(91, 91, "tradeAssets/asset 12.svg"),
	new Icon(92, 92, "tradeAssets/asset 13.svg"),
	new Icon(93, 93, "tradeAssets/asset 14.svg"),
	new Icon(94, 94, "tradeAssets/asset 15.svg"),
	new Icon(95, 95, "tradeAssets/asset 16.svg"),
	new Icon(96, 96, "tradeAssets/asset 17.svg"),
	new Icon(97, 97, "tradeAssets/asset 18.svg"),
	new Icon(98, 98, "tradeAssets/asset 19.svg"),
	new Icon(99, 99, "tradeAssets/asset 20.svg"),
	new Icon(100, 100, "tradeAssets/asset 21.svg"),
	new Icon(101, 101, "tradeAssets/asset 22.svg"),
	new Icon(102, 102, "tradeAssets/asset 23.svg"),
	new Icon(103, 103, "tradeAssets/asset 24.svg"),
	new Icon(104, 104, "tradeAssets/asset 25.svg"),
	new Icon(105, 105, "tradeAssets/asset 26.svg"),
	new Icon(106, 106, "tradeAssets/asset 27.svg"),
	new Icon(107, 107, "tradeAssets/asset 28.svg"),
	new Icon(108, 108, "tradeAssets/asset 29.svg"),
	new Icon(109, 109, "tradeAssets/asset 30.svg"),
	new Icon(110, 110, "tradeAssets/asset 31.svg"),
	new Icon(111, 111, "tradeAssets/asset 32.svg"),
	new Icon(112, 112, "tradeAssets/asset 33.svg"),
	new Icon(113, 113, "tradeAssets/asset 34.svg"),
	new Icon(114, 114, "tradeAssets/asset 35.svg"),
	new Icon(115, 115, "tradeAssets/asset 36.svg"),
	new Icon(116, 116, "tradeAssets/asset 37.svg"),
	new Icon(117, 117, "tradeAssets/asset 38.svg"),
	new Icon(118, 118, "tradeAssets/asset 39.svg"),
	new Icon(119, 119, "tradeAssets/asset 40.svg"),
	new Icon(120, 120, "tradeAssets/asset 41.svg"),
];

console.log(iconsArr);

iconsArr.forEach((item, i) => {
	const itemIcon = document.createElement("div");
	itemIcon.classList.add("wrapper-icons-unit");
	itemIcon.innerHTML = `<img src="${iconsArr[i].url}" alt="${iconsArr[i].name}" class ="icon-img">`;
	wrapperIcons.appendChild(itemIcon);

	itemIcon.addEventListener("mouseover", (event) => {
		const toolTip = document.createElement("div");
		toolTip.classList.add("icon-tooltip");
		toolTip.innerHTML = `<p>${iconsArr[i].name}</p>`;
		wrapperIcons.appendChild(toolTip);
		console.log(event);
});
	itemIcon.addEventListener("mouseout", () => {
		wrapperIcons.removeChild(wrapperIcons.lastChild);
	})
	})
	

/**
 * ?typography
 */

const typographyEl = document.querySelector(".wrapper-typography");

typographyEl.innerHTML = `<h1>Typography</h1>`;

const unitWrapper = document.createElement("div");
unitWrapper.classList.add("wrapper-typography-unitContainer");
typographyEl.appendChild(unitWrapper);

class Typography {
	fontWeight = "";

	constructor(name, fontSize, lineHeight, letterSpacing) {
		this.name = name;
		this.fontSize = fontSize;
		this.lineHeight = lineHeight;
		this.letterSpacing = letterSpacing;
	}

	set fontWeight(value) {
		this.fontWeight = value;
	}
}

const h1 = new Typography("h1", "48px", "1.1", "normal");
h1.fontWeight = "600";
const h2 = new Typography("h2", "32px", "1.1", "normal");
h2.fontWeight = "600";

const typographyArr = [
	h1,
	h2,
	new Typography("h3", "20px", "22px", "normal"),
	new Typography("h4", "16px", "24px", "normal"),
	new Typography("p", "14px", "21px", "normal"),
	new Typography("subP", "12px", "18px", "normal"),
];

console.log(typographyArr);

typographyArr.forEach((item, i) => {
	const itemTypography = document.createElement("div");
	itemTypography.classList.add("wrapper-typography-unit");
	itemTypography.innerHTML = `<${item.name} class="${typographyArr[i].name}">${typographyArr[i].name}</${item.name}>`;
	unitWrapper.appendChild(itemTypography);
	const itemTypographyFontSize = document.createElement("div");
	itemTypographyFontSize.classList.add("wrapper-typography-unit-fontSize");
	itemTypographyFontSize.innerHTML = `<span>fontSize:</span> <span> ${typographyArr[i].fontSize}</span>`;
	itemTypography.appendChild(itemTypographyFontSize);
	const itemTypographyLineHeight = document.createElement("div");
	itemTypographyLineHeight.classList.add("wrapper-typography-unit-lineHeight");
	itemTypographyLineHeight.innerHTML = `<span>lineHeight:</span> <span> ${typographyArr[i].lineHeight}</span>`;
	itemTypography.appendChild(itemTypographyLineHeight);
	const itemTypographyLetterSpacing = document.createElement("div");
	itemTypographyLetterSpacing.classList.add(
		"wrapper-typography-unit-letterSpacing"
	);
	itemTypographyLetterSpacing.innerHTML = `<span>letterSpacing:</span> <span> ${typographyArr[i].letterSpacing}</span>`;
	itemTypography.appendChild(itemTypographyLetterSpacing);
	if (item.fontWeight) {
		const itemTypographyFontWeight = document.createElement("div");
		itemTypographyFontWeight.classList.add("wrapper-typography-unit-fontWeight");
		itemTypographyFontWeight.innerHTML = `<span>fontWeight:</span> <span> ${item.fontWeight}</span>`;
		itemTypography.appendChild(itemTypographyFontWeight);
	}
});

/**
 * ?BUTTONS
 */

const buttonWrapper = document.querySelector(".wrapper-button");

class Button {
	properties = {
		width: "120/170px",
		height: "48px",
		padding: "0px 24px",
		boxShadow: "rgba(14,44,4,0.4) 0px -1px 0px 0px inset",
		borderRadius: "16px",
	};

	typeface = {
		fontFamily: "kanit,sans-serif",
		fontSize: "16px",
		lineHeight: "16px",
		textAlign: "center",
		letterSpacing: "0.48px",
		color: this.fontColor,
	};

	colors = {
		border: this.border,
		borderColor: this.borderColor,
		background: this.backgroundColor,
		effect: "HOVER",
		effectBackground: this.effectBackground,
		effectOpacity: this.effectOpacity,
	};

	constructor(
		name,
		fontColor,
		backgroundColor,
		border,
		borderColor,
		effectBackground,
		effectOpacity
	) {
		this.name = name;
		this.typeface.color = fontColor;
		this.colors.background = backgroundColor;
		this.colors.border = border;
		this.colors.borderColor = borderColor;
		this.colors.effectBackground = effectBackground;
		this.colors.effectOpacity = effectOpacity;
	}
}

const buttonDefault = new Button(
	"default",
	"#ffffff",
	"#1fc7d4",
	"0px",
	"#ffffff",
	"#1fc7d4",
	"65%"
);
const buttonAlternative = new Button(
	"alternative",
	"#1fc7d4",
	"#08060b00",
	"2px solid",
	"#1fc7d4",
	"#08060b",
	"65%"
);
const buttonInfo = new Button(
	"info",
	"#1fc7d4",
	"#08060b00",
	"0px",
	"#1fc7d4",
	"#08060b",
	"65%"
);
buttonInfo.properties.width = "41px";
buttonInfo.typeface.lineHeight = "24px";
const buttonConnect = new Button(
	"connect",
	"#ffffff",
	"#1fc7d4",
	"0px",
	"#ffffff",
	"#1fc7d4",
	"65%"
);
buttonConnect.properties.height = "32px";

const buttonArr = [buttonDefault, buttonAlternative, buttonInfo, buttonConnect];
console.log(buttonArr);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("wrapper-button-container");

buttonWrapper.appendChild(buttonContainer);

const buttonMaker = (button) => {
	const buttonContainerUnitWrapper = document.createElement("div");
	buttonContainerUnitWrapper.innerHTML = `<h1>${button.name}</h1>`;
	buttonContainerUnitWrapper.classList.add("wrapper-button-container-content");
	buttonContainer.appendChild(buttonContainerUnitWrapper);

	const buttonContentWrapper = document.createElement("div");
	buttonContainerUnitWrapper.appendChild(buttonContentWrapper);
	buttonContentWrapper.classList.add("wrapper-button-container-content-wrapper");

	const buttonPropertiesContainer = document.createElement("div");
	buttonPropertiesContainer.innerHTML = `<h4>PROPERTIES:</h4>`;
	buttonPropertiesContainer.classList.add(
		"wrapper-button-container-content-wrapper-properties"
	);
	buttonContentWrapper.appendChild(buttonPropertiesContainer);

	const buttonTypefaceContainer = document.createElement("div");
	buttonTypefaceContainer.innerHTML = `<h4>TYPEFACE:</h4>`;
	buttonTypefaceContainer.classList.add(
		"wrapper-button-container-content-wrapper-typeface"
	);
	buttonContentWrapper.append(buttonTypefaceContainer);

	const buttonColorContainer = document.createElement("div");
	buttonColorContainer.innerHTML = `<h4>COLORS:</h4>`;
	buttonContentWrapper.append(buttonColorContainer);
	buttonColorContainer.classList.add(
		"wrapper-button-container-content-wrapper-color"
	);

	const buttonPreviewContainer = document.createElement("div");
	buttonContentWrapper.append(buttonPreviewContainer);
	buttonPreviewContainer.classList.add(
		"wrapper-button-container-content-wrapper-button"
	);

	const buttonPreviewActived = document.createElement("div");
	buttonPreviewActived.classList.add(`button-${button.name}`);
	buttonPreviewActived.setAttribute("data-status", "actived");
	buttonPreviewActived.innerHTML = `<span>${button.name}</span>`;

	const buttonPreviewDeactived = document.createElement("div");
	buttonPreviewDeactived.setAttribute("data-status", "deactived");
	buttonPreviewDeactived.classList.add(`button-${button.name}`);
	buttonPreviewDeactived.innerHTML = `<span>${button.name}</span>`;

	document.querySelectorAll('[data-status="deactived"').forEach((el) => {
		console.log(el);
		return (el.disabled = true);
	});

	buttonPreviewContainer.append(buttonPreviewActived, buttonPreviewDeactived);

	Object.entries(button.properties).forEach((el) => {
		const elWrapper = document.createElement("div");
		buttonPropertiesContainer.appendChild(elWrapper);
		el.map((el) => {
			const elContainer = document.createElement("div");
			elContainer.innerText = `${el}`;
			elWrapper.appendChild(elContainer);
		});
	});

	Object.entries(button.typeface).forEach((el) => {
		const elWrapper = document.createElement("div");
		buttonTypefaceContainer.appendChild(elWrapper);
		el.map((el) => {
			const elContainer = document.createElement("div");
			elContainer.innerText = `${el}`;
			elWrapper.appendChild(elContainer);
		});
	});

	Object.entries(button.colors).forEach((el) => {
		const elWrapper = document.createElement("div");
		buttonColorContainer.appendChild(elWrapper);
		el.map((el) => {
			const elContainer = document.createElement("div");
			elContainer.innerText = `${el}`;
			elWrapper.appendChild(elContainer);
		});
	});
};

buttonArr.map((button) => buttonMaker(button));

/**
 * ?CAROUSEL OF BUTTONS PREVIEW
 */

const ButtonInfoPreview = document.querySelectorAll(
	".wrapper-button-container-content"
);

let counter = 0;
const maxCounter = ButtonInfoPreview.length - 1;

const carouselButtonPreviw = (elements) => {
	elements.forEach((el, i) => {
		if (i === counter) {
			el.classList.remove("hide");
		} else {
			el.classList.add("hide");
		}
	});
};

carouselButtonPreviw(ButtonInfoPreview);

const carouselButtonNext = () => {
	if (counter < maxCounter) {
		ButtonInfoPreview[counter].classList.add("hide");
		counter++;
		ButtonInfoPreview[counter].classList.remove("hide");
		console.log(counter);
	} else if (counter === maxCounter) {
		ButtonInfoPreview[counter].classList.add("hide");
		counter = 0;
		ButtonInfoPreview[counter].classList.remove("hide");
		console.log(counter);
	}
};

const carouselButtonPrev = () => {
	if (counter > 0) {
		ButtonInfoPreview[counter].classList.add("hide");
		counter--;
		ButtonInfoPreview[counter].classList.remove("hide");
		console.log(counter);
	} else if (counter === 0) {
		ButtonInfoPreview[counter].classList.add("hide");
		counter = maxCounter;
		ButtonInfoPreview[counter].classList.remove("hide");
		console.log(counter);
	}
};

const buttonNext = document.createElement("div");
buttonNext.classList.add("button-next");
buttonNext.innerHTML = `<span>></span>`;
buttonContainer.appendChild(buttonNext);

const buttonPrev = document.createElement("div");
buttonPrev.classList.add("button-prev");
buttonPrev.innerHTML = `<span><</span>`;
buttonContainer.appendChild(buttonPrev);

buttonNext.addEventListener("click", () => carouselButtonNext());
buttonPrev.addEventListener("click", () => carouselButtonPrev());

/**
 * ?FORM PREVIEW
 */

class Input {
	constructor(name, type, wrapper) {
		this.name = name;
		this.type = type;

		const InputContainer = document.createElement("div");
		InputContainer.classList.add(`input-${this.name}-container`);

		if (this.name === "text") {
			this.properties = {
				padding: "0px 16px",
				borderRadius: "16px",
			};
			this.typeface = {
				fontSize: "16px",
				lineHeight: "normal",
				textAlign: "right",
				letterSpacing: "normal",
				fontWeight: "500",
				color: "#f4eeff",
			};

			this.colors = {
				backgroundColor: "#372f47",
				borderColor: "#f4eeff",
				opacity: "0%",
				border: "0px",
			};

			this.effect = {
				focus: {
					boxShadow: "0px 0px 0px 1px #7645d9 0px 0px 0px 4px #7645d9",
				},
			};

		} else if (this.name === "checkbox") {
			this.properties = {
				width: "24px",
				height: "24px",
				borderRadius: "8px",
				boxShadow: "rgba(74, 74, 104, 0.1)0px 2px 2px -1px inse",
			};

			this.colors = {
				backgroundColor: "#eeeaf4",
				borderColor: "#000000",
				border: "0px",
			};

			this.effect = {
				checked: {
					backgroundColor: "#31d0aa",
				}
			};
		} else if (this.name === "radio") {
			this.properties = {
				width: "24px",
				height: "24px",
				borderRadius: "50%",
				boxShadow: "rgba(74, 74, 104, 0.1)0px 2px 2px -1px inset",
			};

			this.colors = {
				backgroundColor: "#372f47",
			};

			this.effect = {
				checked: {
					border: "2px solid #31d0aa",
				},
				focus:{	
					boxShadow: "0px 0px 0px 1px #7645d9 0px 0px 0px 4px #7645d9",
				}
			};
		}

		const input = document.createElement("input");
		input.setAttribute("type", this.type);
		input.setAttribute("name", this.name);
		InputContainer.appendChild(input);


		const InputProperties = document.createElement("div");
		InputProperties.classList.add(`input-${this.name}-properties`);
		InputProperties.innerHTML = `<h4>PROPERTIES</h4>`;
		Object.entries(this.properties).forEach((el) => {
			const elContainer = document.createElement("div");
			elContainer.classList.add(`input-${this.name}-properties-unit`);
			el.map((element) => {
				const el = document.createElement("div");
				el.innerText = `${element}`;
				elContainer.appendChild(el);
			});
			InputProperties.appendChild(elContainer);
		});

		InputContainer.appendChild(InputProperties);
		wrapper.appendChild(InputContainer);

		const InputTypeface = document.createElement("div");
		if (this.typeface) {
			InputTypeface.classList.add(`input-${this.name}-typeface`);
			InputTypeface.innerHTML = `<h4>TYPEFACE</h4>`;
		Object.entries(this.typeface).forEach((el) => {
			const elWrapper = document.createElement("div");
			elWrapper.classList.add(`input-${this.name}-typeface-unit`);
			el.map((el) => {
				const elContainer = document.createElement("div");
				elContainer.innerText = `${el}`;
				elWrapper.appendChild(elContainer);
			});
			InputTypeface.appendChild(elWrapper);
		})
		} 

		InputContainer.appendChild(InputTypeface);

		const InputColors = document.createElement("div");
		InputColors.classList.add(`input-${this.name}-colors`);
		InputColors.innerHTML = `<h4>COLORS</h4>`;
		Object.entries(this.colors).forEach((el) => {
			const elWrapper = document.createElement("div");
			elWrapper.classList.add(`input-${this.name}-colors-unit`);
			el.map((el) => {
				const elContainer = document.createElement("div");
				elContainer.innerText = `${el}`;
				elWrapper.appendChild(elContainer);
			});
			InputColors.appendChild(elWrapper);
		})

		InputContainer.appendChild(InputColors);

		if (this.name === "radio") {
			const cloneRadio = input.cloneNode(true);
			InputContainer.insertBefore(cloneRadio, InputContainer.firstChild);
		}
	}

}

const formWrapper = document.querySelector(".wrapper-form-tab");

formWrapper.innerHTML = `<h4>INPUT:</h4>`;

const inputText = new Input("text", "text", formWrapper);
const checkboxInput = new Input("checkbox", "checkbox", formWrapper);
const radioInput = new Input("radio", "radio", formWrapper);

document.querySelector("[type=checkbox]").classList.add("checkbox-input");

console.log(inputText);
