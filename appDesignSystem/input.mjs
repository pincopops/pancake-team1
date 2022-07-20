/**
 * *CLASSE INPUT******************************************************************************
 */

 class Input {

	constructor(name, type, wrapper) {
		this.name = name;
		this.type = type;
		this.wrapper = wrapper

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
				},
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
				focus: {
					boxShadow: "0px 0px 0px 1px #7645d9 0px 0px 0px 4px #7645d9",
				},
			};
		}
		
	}
	
	inputMaker() {

		const InputContainer = document.createElement("div");
		InputContainer.classList.add(`input-${this.name}-container`);

			const input = document.createElement("input");
			input.setAttribute("type", this.type);
			input.setAttribute("name", this.name);
			InputContainer.appendChild(input);

			const infocontainer = document.createElement("div");
			infocontainer.classList.add(`info-${this.name}-container`);
			InputContainer.appendChild(infocontainer);

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

			infocontainer.appendChild(InputProperties);
			this.wrapper.appendChild(InputContainer);

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
				});
			}

			infocontainer.appendChild(InputTypeface);

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
			});

			infocontainer.appendChild(InputColors);

			if (this.name === "radio") {
				const cloneRadio = input.cloneNode(true);
				InputContainer.insertBefore(cloneRadio, InputContainer.firstChild);
			}
		}
}

const formWrapper = document.querySelector(".wrapper-form-tab");

formWrapper.innerHTML = `<h4>INPUT:</h4>`;


const inputText = new Input("text", "text", formWrapper);
inputText.inputMaker()
const checkboxInput = new Input("checkbox", "checkbox", formWrapper);
checkboxInput.inputMaker()
const radioInput = new Input("radio", "radio", formWrapper);
radioInput.inputMaker()
console.log(radioInput);

export {inputText,checkboxInput,radioInput}

document.querySelector("[type=checkbox]").classList.add("checkbox-input");