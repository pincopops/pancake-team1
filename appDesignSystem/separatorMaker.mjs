/**
 * ?MAKER PER I SEPARATORI FRA LE SEZIONI
 */

 const sections = document.querySelectorAll("div");

 const sectionsArr = Array.from(sections);
 
 const onlysection = sectionsArr.filter(
     (section) => section.dataset.id === "section"
 );
 
 console.log(onlysection);
 
 export const separatorMaker = (array, imgurl, sec) => {
     array.find((section) => {
         if (section.classList.contains(sec)) {
             const separatorWrapper = document.createElement("div");
             separatorWrapper.classList.add("separator-wrapper");
             const img = document.createElement("img");
             img.classList.add("separator-img");
             img.setAttribute("src", imgurl);
             separatorWrapper.appendChild(img);
             section.appendChild(separatorWrapper);
         }
     });
 };
 
 separatorMaker(onlysection, "./assets/asset 47.svg", "wrapper-typography");
 separatorMaker(onlysection, "./assets/asset 2.png", "colors-container");
 separatorMaker(onlysection, "./assets/asset 0.png", "wrapper-icons");
 separatorMaker(onlysection, "./assets/asset 6.png", "wrapper-form-tab");
 separatorMaker(onlysection, "./assets/asset 8.png", "wrapper-button");
 separatorMaker(onlysection, "./assets/asset 29.png", "wrapper-tab");
 separatorMaker(onlysection, "./assets/asset 13.png", "wrapper-card");
 