/**
 * *CLASSE VERTICAL TAB*******************************************************************************
 */

 const verticalTabWrapper = document.querySelector(".wrapper-tab-vertical");
 verticalTabWrapper.innerHTML = "<h1>Vertical Tab</h1>";
 
 class Vercialtab {
     constructor(list) {
         this.list = list;
 
         const verticalTab = document.createElement("div");
         verticalTab.classList.add("tab");
         verticalTabWrapper.appendChild(verticalTab);
 
         const tabHeader = document.createElement("div");
         tabHeader.classList.add("tabHeader");
         verticalTab.appendChild(tabHeader);
         tabHeader.innerHTML = "<span>Tab</span>";
 
         const triangle = document.createElement("div");
         triangle.classList.add("triangle");
         tabHeader.appendChild(triangle);
 
         const tabContent = document.createElement("div");
         verticalTab.appendChild(tabContent);
         tabContent.classList.add("tabContent", "hide");
 
         this.list.forEach((item) => {
             const itemEl = document.createElement("div");
             itemEl.innerHTML = `<span>${item}</span>`;
             console.log(itemEl);
             tabContent.appendChild(itemEl);
         });
 
         tabHeader.addEventListener("click", () => {
             if (tabContent.classList.contains("hide")) {
                 tabContent.classList.remove("hide");
                 tabHeader.style.borderRadius = "0.8rem 0.8rem 0rem 0rem";
             } else {
                 tabContent.classList.add("hide");
                 tabHeader.style.borderRadius = "0.8rem 0.8rem 0.8rem 0.8rem";
             }
         });
 
         tabContent.addEventListener("click", (item, i) => {
             tabHeader.innerHTML = `<span>${item.target.textContent}</span>`;
             tabContent.classList.add("hide");
             tabHeader.style.borderRadius = "0.8rem 0.8rem 0.8rem 0.8rem";
             tabHeader.appendChild(triangle);
         });
 
         const infoWrapper = document.createElement("div");
         infoWrapper.classList.add("infoWrapper");
 
         const propertiesEl = document.createElement("div");
         propertiesEl.classList.add(`${this.name}-properties`);
         propertiesEl.innerHTML = `<h4>PROPERTIES:</h4>`;
         verticalTabWrapper.appendChild(infoWrapper);
         infoWrapper.appendChild(propertiesEl);
 
         Object.entries(this.properties).forEach((el) => {
             console.log(el);
             const elWrapper = document.createElement("div");
             elWrapper.classList.add(`input-${this.name}-properties-unit`);
             el.map((el) => {
                 const elContainer = document.createElement("div");
                 elContainer.innerText = `${el}`;
                 elWrapper.appendChild(elContainer);
             });
             propertiesEl.appendChild(elWrapper);
         });
 
         const typefaceEl = document.createElement("div");
         typefaceEl.classList.add(`${this.name}-typeface`);
         typefaceEl.innerHTML = `<h4>TYPEFACE:</h4>`;
         infoWrapper.appendChild(typefaceEl);
 
         Object.entries(this.typeface).forEach((el) => {
             console.log(el);
             const elWrapper = document.createElement("div");
             elWrapper.classList.add(`input-${this.name}-typeface-unit`);
             el.map((el) => {
                 const elContainer = document.createElement("div");
                 elContainer.innerText = `${el}`;
                 elWrapper.appendChild(elContainer);
             });
             typefaceEl.appendChild(elWrapper);
         });
 
         const colorEl = document.createElement("div");
         colorEl.classList.add(`${this.name}-colors`);
         colorEl.innerHTML = `<h4>COLORS:</h4>`;
         infoWrapper.appendChild(colorEl);
 
         Object.entries(this.colors).forEach((el) => {
             console.log(el);
             const elWrapper = document.createElement("div");
             elWrapper.classList.add(`input-${this.name}-typeface-unit`);
             el.map((el) => {
                 const elContainer = document.createElement("div");
                 elContainer.innerText = `${el}`;
                 elWrapper.appendChild(elContainer);
             });
             colorEl.appendChild(elWrapper);
         });
 
         const effectEl = document.createElement("div");
         effectEl.classList.add(`${this.name}-effects`);
         effectEl.innerHTML = `<h4>EFFECT:</h4>`;
         infoWrapper.appendChild(effectEl);
 
         Object.entries(this.effect.hover).forEach((el) => {
             console.log(el);
             const elWrapper = document.createElement("div");
             elWrapper.classList.add(`input-${this.name}-typeface-unit`);
             el.map((el) => {
                 const elContainer = document.createElement("div");
                 elContainer.innerText = `${el}`;
                 elWrapper.appendChild(elContainer);
             });
             effectEl.appendChild(elWrapper);
         });
     }
 
     name = "verticalTab";
 
     properties = {
         padding: "8px 16px",
         borderRadius: "8px",
     };
 
     typeface = {
         fontSize: "16px",
         lineHeight: "16px",
         textAlign: "start",
         letterSpacing: "normal",
         color: "#f4eeff",
     };
 
     colors = {
         border: "1px solid #262130",
         backgroundColor: "#37f4600",
     };
 
     effect = {
         hover: {
             backgroundColor: "#262130",
         },
     };
 }
 
 const arr = ["ciao", "bye", "ola"];
 
 export const newTab = new Vercialtab(arr);