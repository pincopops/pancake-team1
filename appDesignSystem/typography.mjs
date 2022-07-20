/**
 * *CLASSE TIPOGRAFIA*****************************************************************************
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

     typographyMaker(){
        const itemTypography = document.createElement("div");
        itemTypography.classList.add("wrapper-typography-unit");
        itemTypography.innerHTML = `<${this.name} class="${this.name}">${this.name}</${this.name}>`;
        unitWrapper.appendChild(itemTypography);
        const itemTypographyFontSize = document.createElement("div");
        itemTypographyFontSize.classList.add("wrapper-typography-unit-fontSize");
        itemTypographyFontSize.innerHTML = `<span>fontSize:</span> <span> ${this.fontSize}</span>`;
        itemTypography.appendChild(itemTypographyFontSize);
        const itemTypographyLineHeight = document.createElement("div");
        itemTypographyLineHeight.classList.add("wrapper-typography-unit-lineHeight");
        itemTypographyLineHeight.innerHTML = `<span>lineHeight:</span> <span> ${this.lineHeight}</span>`;
        itemTypography.appendChild(itemTypographyLineHeight);
        const itemTypographyLetterSpacing = document.createElement("div");
        itemTypographyLetterSpacing.classList.add(
            "wrapper-typography-unit-letterSpacing"
        );
        itemTypographyLetterSpacing.innerHTML = `<span>letterSpacing:</span> <span> ${this.letterSpacing}</span>`;
        itemTypography.appendChild(itemTypographyLetterSpacing);
        if (this.fontWeight) {
            const itemTypographyFontWeight = document.createElement("div");
            itemTypographyFontWeight.classList.add("wrapper-typography-unit-fontWeight");
            itemTypographyFontWeight.innerHTML = `<span>fontWeight:</span> <span> ${this.fontWeight}</span>`;
            itemTypography.appendChild(itemTypographyFontWeight);
        }
     }
 }
 
 const h1 = new Typography("h1", "48px", "1.1", "normal");
 h1.fontWeight = "600";
 const h2 = new Typography("h2", "32px", "1.1", "normal");
 h2.fontWeight = "600";
 
 export const typographyArr = [
     h1,
     h2,
     new Typography("h3", "20px", "22px", "normal"),
     new Typography("h4", "16px", "24px", "normal"),
     new Typography("p", "14px", "21px", "normal"),
     new Typography("subP", "12px", "18px", "normal"),
 ];
 
