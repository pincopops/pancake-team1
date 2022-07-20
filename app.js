/**
 * *INIZIALIZZO LA CLASSE COLOR PER GESTIRE LE VARIABILI DEI COLORI CON UN ARRAY
 */

import { colorsArr } from "./appDesignSystem/colors.mjs";

console.log(colorsArr);

colorsArr.forEach((color) => color.colorMaker());

/**
 * *CLASSE ICONE ***************************************************************************************
 */

import { iconsArr } from "./appDesignSystem/Icons.mjs";

iconsArr.forEach((icon) => icon.iconMaker());

/**
 * *CLASSE TIPOGRAFIA*****************************************************************************
 */

import { typographyArr } from "./appDesignSystem/typography.mjs";

typographyArr.forEach((typography) => typography.typographyMaker());

// /**
//  * *CLASSE BOTTINI************************************************************************************
//  */

import { buttonArr, carouselButtonMaker } from "./appDesignSystem/buttons.mjs";

buttonArr.map((button) => button.buttonMaker());
carouselButtonMaker();

/**
 * *CLASSE INPUT******************************************************************************
 */

import {inputText,checkboxInput,radioInput} from "./appDesignSystem/input.mjs"



/**
 * *CLASSE VERTICAL TAB*******************************************************************************
 */

import { newTab } from "./appDesignSystem/verticalTab.mjs";

//**************************************************************/

// let tokenArr = [];

// const binancePublicEndpoint = "https://api.binance.com";
// const exchangeInfoEndpoint = binancePublicEndpoint + "/api/v3/exchangeInfo";
// const tickersEndpoint = binancePublicEndpoint + "/api/v3/ticker/price";

// componentDidMount = async () => {
// 	const resToken = await fetch("https://api.pancakeswap.info/api/v2/pairs");
// 	const dataToken = await resToken.json();

// 	const tokens = Object.values(dataToken.data);

// 	return tokens;
// };

// componentDidMount().then((tokens) => {
// 	tokens.forEach((token) => console.log(token));
// });

//******************************************************************** */

/**
 * ?MAKER PER I SEPARATORI FRA LE SEZIONI
 */

import { separatorMaker } from "./appDesignSystem/separatorMaker.mjs";