/**
 * *CLASSE ICONE ***************************************************************************************
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

     iconMaker(){
        const itemIcon = document.createElement("div");
     itemIcon.classList.add("wrapper-icons-unit");
     itemIcon.innerHTML = `<img src="${this.url}" alt="${this.name}" class ="icon-img">`;
     wrapperIcons.appendChild(itemIcon);
 
     itemIcon.addEventListener("mouseover", () => {
         const toolTip = document.createElement("div");
         toolTip.classList.add("icon-tooltip");
         toolTip.innerHTML = `<p>${this.name}</p>`;
         wrapperIcons.appendChild(toolTip);
     });
     itemIcon.addEventListener("mouseout", () => {
         wrapperIcons.removeChild(wrapperIcons.lastChild);
     });
     }
 }
 
 export const iconsArr = [
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
 
