/**
 * *CLASSE BOTTINI************************************************************************************
 */

const buttonWrapper = document.querySelector(".wrapper-button");

export class Button {
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

	buttonMaker() {
		const buttonContainerUnitWrapper = document.createElement("div");
		buttonContainerUnitWrapper.innerHTML = `<h1>${this.name}</h1>`;
		buttonContainerUnitWrapper.classList.add("wrapper-button-container-content");
		buttonContainer.appendChild(buttonContainerUnitWrapper);

		const buttonContentWrapper = document.createElement("div");
		buttonContainerUnitWrapper.appendChild(buttonContentWrapper);
		buttonContentWrapper.classList.add(
			"wrapper-button-container-content-wrapper"
		);

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
		buttonPreviewActived.classList.add(`button-${this.name}`);
		buttonPreviewActived.setAttribute("data-status", "actived");
		buttonPreviewActived.innerHTML = `<span>${this.name}</span>`;

		const buttonPreviewDeactived = document.createElement("div");
		buttonPreviewDeactived.setAttribute("data-status", "deactived");
		buttonPreviewDeactived.classList.add(`button-${this.name}`);
		buttonPreviewDeactived.innerHTML = `<span>${this.name}</span>`;

		document.querySelectorAll('[data-status="deactived"').forEach((el) => {
			return (el.disabled = true);
		});

		buttonPreviewContainer.append(buttonPreviewActived, buttonPreviewDeactived);

		Object.entries(this.properties).forEach((el) => {
			const elWrapper = document.createElement("div");
			buttonPropertiesContainer.appendChild(elWrapper);
			el.map((el) => {
				const elContainer = document.createElement("div");
				elContainer.innerText = `${el}`;
				elWrapper.appendChild(elContainer);
			});
		});

		Object.entries(this.typeface).forEach((el) => {
			const elWrapper = document.createElement("div");
			buttonTypefaceContainer.appendChild(elWrapper);
			el.map((el) => {
				const elContainer = document.createElement("div");
				elContainer.innerText = `${el}`;
				elWrapper.appendChild(elContainer);
			});
		});

		Object.entries(this.colors).forEach((el) => {
			const elWrapper = document.createElement("div");
			buttonColorContainer.appendChild(elWrapper);
			el.map((el) => {
				const elContainer = document.createElement("div");
				elContainer.innerText = `${el}`;
				elWrapper.appendChild(elContainer);
			});
		});
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

export const buttonArr = [
	buttonDefault,
	buttonAlternative,
	buttonInfo,
	buttonConnect,
];

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("wrapper-button-container");

buttonWrapper.appendChild(buttonContainer);

/**
 * ?CAROUSEL OF BUTTONS PREVIEW********************************************************************************
 */

export const carouselButtonMaker = () => {
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
		} else if (counter === maxCounter) {
			ButtonInfoPreview[counter].classList.add("hide");
			counter = 0;
			ButtonInfoPreview[counter].classList.remove("hide");
		}
	};

	const carouselButtonPrev = () => {
		if (counter > 0) {
			ButtonInfoPreview[counter].classList.add("hide");
			counter--;
			ButtonInfoPreview[counter].classList.remove("hide");
		} else if (counter === 0) {
			ButtonInfoPreview[counter].classList.add("hide");
			counter = maxCounter;
			ButtonInfoPreview[counter].classList.remove("hide");
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
};
